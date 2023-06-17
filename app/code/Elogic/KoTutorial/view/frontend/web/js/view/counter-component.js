define([
    'uiComponent',
    'Elogic_KoTutorial/js/model/counter'
], function (
    Component,
    Counter
) {
    'use strict';

    return Component.extend({
        defaults: {
            count: Counter
        },

        initialize() {
            this._super();

        }
    });
});
