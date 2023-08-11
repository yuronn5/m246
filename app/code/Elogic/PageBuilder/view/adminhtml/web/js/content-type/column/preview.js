function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


define([
    'Magento_PageBuilder/js/content-type/column/preview',
    'Magento_PageBuilder/js/content-type-menu/option',
    'Magento_PageBuilder/js/config',
    'Magento_PageBuilder/js/content-type-factory',
    'mage/translate'
], (
    OriginalColumn,
    Option,
    Config,
    ContentTypeFactory,
    $t
) => {
   'use strict';

   return function (OriginalColumn) {
        function Column() {
            return OriginalColumn.apply(this, arguments);
        }

       _inheritsLoose(Column, OriginalColumn);

        Column.prototype.retrieveOptions = function () {
            const options = OriginalColumn.prototype.retrieveOptions.call(this);

            options.insertRow = new Option({
                preview: this,
                icon: '<i class="icon-pagebuilder-add"></i>',
                title: $t('Insert row'),
                classes: ['pagebuilder-insert-row'],
                sort: 70,
                action: this.insertRow
            });

            return options;
        };

       Column.prototype.insertRow = async function () {
           try {
            const rowConfig = Config.getContentTypeConfig('row');

            const childRow = await ContentTypeFactory(
                {
                    ...rowConfig,
                    preview_component: 'Elogic_PageBuilder/js/content-type/row/preview'
                },
                this.contentType,
                this.contentType.stageId,
            );

            this.contentType.addChild(childRow);

           } catch (e) {
               throw new Error(e);
           }
       };

       return Column;
   }(OriginalColumn);
});
