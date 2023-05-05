define(
    [
        'uiComponent',
        'jquery',
        'ko'
    ],
    function(
        Component,
        $,
        ko
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Elogic_CheckoutCmsBlocks/shipping/customblock'
            },

            initialize: function () {
                var self = this;
                this._super();
            }

        });
    }
);
