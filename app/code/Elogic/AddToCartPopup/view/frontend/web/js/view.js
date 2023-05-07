define([
    'jquery',
    'uiComponent',
    'ko',
    'underscore',
    'Elogic_AddToCartPopup/js/model/popup',
    'Magento_Ui/js/modal/modal',
    'Magento_Customer/js/customer-data'
], function ($, Component, ko, _, cartModel, modal,customerData) {
    'use strict';
    // var modalPopupSelector = '[data-placeholder="cart-popup"] .cart-popup';
    var cart = customerData.get('cart');
    var count = cart().summary_count;

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

            // cart.subscribe(function () {
            //         //     if (cart().summary_count !== count) {
            //         //         count = cart().summary_count;
            //         //         // do something here
            //         //         console.log('Number of items in cart is now: ' + count);
            //         //     }
            //         // });

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
        },

        slider: function () {
            console.log(1);
        }
    })
});
