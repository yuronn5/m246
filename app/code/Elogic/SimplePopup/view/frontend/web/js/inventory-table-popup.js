
//
// Size guide popup on PDP
// ---------------------------
define([
    'jquery',
    'jquery-ui-modules/widget',
    'Magento_Ui/js/modal/modal',
    'domReady!'
], function ($){
    'use strict';

    $.widget('mage.inventoryTablePopup', {
        options:{
            openPopupBtn: '',
            modalOptions:{
                type: 'popup',
                responsive: true,
                modalClass: 'tablito-popup'
            }
        },

        _create: function (){
            let $this = this;

            $(this.element).modal(this.options.modalOptions);
            $(this.options.openPopupBtn).click(function (){
                console.log(111, $(this).attr('name'), $($this.element).attr('name'), $($this.element))
                if($(this).attr('name') === $($this.element).attr('name')) {
                    // $($this.element).modal("openModal");
                }
                $($this.element).modal("openModal");
            });

            $(this.element).show();
        }
    });

    return $.mage.inventoryTablePopup;
});
