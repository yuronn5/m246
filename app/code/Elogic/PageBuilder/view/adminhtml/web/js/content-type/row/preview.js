function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


define([
    'Magento_PageBuilder/js/content-type/row/preview',
    'Magento_PageBuilder/js/content-type-menu/option',
    'Magento_PageBuilder/js/config',
    'Magento_PageBuilder/js/content-type-factory',
    'Magento_PageBuilder/js/events',
    'mage/translate'
], (
    OriginalRow,
    Option,
    Config,
    ContentTypeFactory,
    Events,
    $t
) => {
   'use strict';

   return function (OriginalRow) {
        function Row() {
            return OriginalRow.apply(this, arguments);
        }

       _inheritsLoose(Row, OriginalRow);

        Row.prototype.retrieveOptions = function () {
            const options = OriginalRow.prototype.retrieveOptions.call(this);

            options.insertColumnGroup = new Option({
                preview: this,
                icon: '<i class="icon-pagebuilder-add"></i>',
                title: $t('Insert column group'),
                classes: ['pagebuilder-insert-column-group'],
                sort: 70,
                action: this.insertColumnGroup
            });

            return options;
        };

       Row.prototype.insertColumnGroup = async function () {
           try {
            const columnGroupConfig = Config.getContentTypeConfig('column-group');

            const childColumnGroup = await ContentTypeFactory(
                columnGroupConfig,
                this.contentType,
                this.contentType.stageId,
            );

            this.contentType.addChild(childColumnGroup);
               Events.trigger('column-group:dropAfter', {
                   id: childColumnGroup.id
               })

           } catch (e) {
               throw new Error(e);
           }
       };

       return Row;
   }(OriginalRow);
});
