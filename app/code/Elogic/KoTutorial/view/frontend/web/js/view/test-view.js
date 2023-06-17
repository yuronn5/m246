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
            content: ko.observable('Lorem ipsum blallalala'),
            counter: ko.observable(0)
        },

        initialize() {
            this._super();
            this.heading("update heading").content("Custom text from js");
            this.content.subscribe(function (newValue) {
                console.log("a change:" + newValue);
                this.counter(newValue.length)
            }, this)
        },

        onChangeInput: function () {
            let inputVal = $('#custom-input').val();
            this.content(inputVal);
        }
    });
});
