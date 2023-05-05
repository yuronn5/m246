define(['uiComponent', 'ko', 'Macademy_InventoryFulfillment/js/model/sku', 'Macademy_InventoryFulfillment/js/model/box-configurations', 'mage/url', 'mage/storage'], function (Component, ko, skuModel, boxConfigurationsModel, url, storage) {
    'use strict';

    return Component.extend({
        defaults: {
            numberOfBoxes: boxConfigurationsModel.numberOfBoxes(),
            shipmentWeight: 0,
            billableWeight: 0,
            isTermsChecked: ko.observable(false),
            boxConfigurationsIsSuccess: boxConfigurationsModel.isSuccess,
            boxConfigurations: boxConfigurationsModel.boxConfigurations,
            sku: skuModel.sku
        },

        initialize() {
            this._super();

            console.log("the reviewSubmit comp has been loaded")

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
            })
        },

        handleSubmit() {
            if(this.canSubmit()){
                console.log("the reviewSubmit form  has been submitted");
                storage
                    .post(this.getUrl(), {
                        'sku': skuModel.sku(),
                        'boxConfigurations': ko.toJSON(boxConfigurationsModel.boxConfigurations)
                    })
                    .done(responce => console.log('responce', responce))
                    .fail(err => console.log('error', err));
            } else {
                console.log("the reviewSubmit form  has an error")

            }
        },
        getUrl() {
            return url.build('inventory-fulfillment/index/post');
        }

    });
});


