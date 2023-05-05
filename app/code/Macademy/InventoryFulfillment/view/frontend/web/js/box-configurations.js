define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/box-configurations',
    'Macademy_InventoryFulfillment/js/model/sku',
    'jquery'
], function (
    Component,
    ko,
    boxConfigurationsModel,
    skuModel,
    $
) {
    'use strict';



    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel,
            skuModel: skuModel
        },

        initialize() {
            this._super();

            console.log("the box config component loaded");

            skuModel.isSuccess.subscribe((value) => {
                console.log('sku is success new value', value)
            });

            skuModel.isSuccess.subscribe((value) => {
                console.log('sku is success old value', value)
            }, null, 'beforeChange');
        },

        handleAdd() {
            boxConfigurationsModel.add();
        },

        handleDelete(index) {
            console.log('deleted configuration', this, index);
            boxConfigurationsModel.delete(index)
        },

        handleSubmit() {
            $('.box-configurations form input').removeAttr('aria-invalid');

            if($('.box-configurations form').valid()) {
                boxConfigurationsModel.isSuccess(true)
                console.log('box confuguration success');
            } else {
                boxConfigurationsModel.isSuccess(false)
                console.log('box configuration error');
            }
            console.log('submited form config')
        }
    });
});


