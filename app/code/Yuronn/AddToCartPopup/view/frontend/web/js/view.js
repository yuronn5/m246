define([
    'jquery',
    'uiComponent',
    'ko',
    'Yuronn_AddToCartPopup/js/model/popup',
    'Magento_Ui/js/modal/modal'
], function ($, Component, ko, cartModel, modal) {
    'use strict';
    // var modalPopupSelector = '[data-placeholder="cart-popup"] .cart-popup';

    return Component.extend({
        isAdded: ko.observable(false),
        qty: ko.observable('222'),

        /**
         * Initialize Component
         * @returns {*}
         */
        initialize: function (config) {
            // console.log(this.isAdded())
            this._subscribeEvents();
            return this._super();
        },

        /** Init popup window */
        setModalElement: function (element) {
            if (cartModel.modalWindow == null) {
                cartModel.createPopUp(element);
            }
        },

        _subscribeEvents: function () {
            var self = this;


            $(document).on('ajax:addToCart', function () {
                // console.log("added by ajax");
                this.isAdded = true;


                if (this.isAdded) {
                    cartModel.showModal();
                } else {
                    this.isAdded = false
                    cartModel.closeModal();
                }
            }.bind(this));
        },

        checkQty: function () {
            this.qty = 'updated qty';

            return this.qty;
        }
    })
});
