define([
    'uiComponent',
    'ko',
    'jquery'
], function (
    Component,
    ko,
    $
) {
    'use strict';

    return Component.extend({
        defaults: {
            heading: ko.observable("ko heading"),
            content: ko.observable('Lorem ipsum blallalala')
        },

        initialize() {
            this._super();
            this.heading("update heading").content("Custom text from js");
        },

        onChangeInput: function () {
            let inputVal = $('#custom-input').val();
            this.content(inputVal);
        }
    });
});
