/**
 * Copyright © MageKey. All rights reserved.
 * See LICENSE.txt for license details.
 */
define([
    'jquery',
    'ko',
    'Magento_Ui/js/modal/modal',
    'mage/translate'
],function ($, ko, modal, $t) {
    'use strict';

    return {
        modalWindow: null,

        /** Create popup window */
        createPopUp: function (element) {
            this.modalWindow = element;
            var options = {
                'title': $t('Added to your shopping cart'),
                'type': 'popup',
                'innerScroll': false,
                'modalClass': 'mgk-adcpopup-modal',
                'responsive': true,
                'buttons': []
            };
            modal(options, $(this.modalWindow));
        },

        /** Show save cart popup window */
        showModal: function () {
            $(this.modalWindow).modal('openModal');
        },

        /** Close save cart popup window */
        closeModal: function () {
            $(this.modalWindow).modal('closeModal');
        }
    }
});
