define([
    'uiComponent',
    'ko'
], function (
    Component,
    ko
) {
    'use strict';

    return Component.extend({
        defaults: {
            heading: "ko heading",
            content: 'Lorem ipsum blallalala'
        },

        initialize() {
            this._super();

        }
    });
});
