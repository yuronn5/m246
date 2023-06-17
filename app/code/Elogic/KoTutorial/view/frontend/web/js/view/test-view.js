define([
    'uiComponent',
    'ko',
    'jquery',
    'Elogic_KoTutorial/js/model/counter'
], function (
    Component,
    ko,
    $,
    Counter
) {
    'use strict';

    return Component.extend({
        defaults: {
            heading: ko.observable("ko heading"),
            content: ko.observable('Lorem ipsum blallalala'),
            counter: Counter
        },

        initialize() {
            this._super();
            this.heading("update heading").content("Custom text from js");
            this.content.subscribe(function (newValue) {
                console.log("a change:" + newValue);
                Counter(newValue.length);
            }, this)
        },

        onChangeInput: function () {
            let inputVal = $('#custom-input').val();
            this.content(inputVal);
        }
    });
});
