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

            let self = this;

            setTimeout(function () {
                // self.heading("update heading"); //міняєм на те саме шо у нас вже є щоб впевнетись що сабскрайбер не спрацює, бо валує однакове
                self.heading("update heading").content('New changes in content!');
            }, 4000);

            this.heading.subscribe(function (newValue) {
                // console.log("Headng value updated: " + newValue);
                // alert("Headng value updated: " + newValue);
                //
                console.log("Headng value updated: " + newValue + " and content changed to: " + this.content());
            }, this);

            //завзяки цьому нотіфай - алвейс наш сабскрайбер буде відпрацьовувати завжди, не залежно яке значення
            this.heading.extend({
                notify: 'always',
                rateLimit: 50
            });
        },

        onChangeInput: function () {
            let inputVal = $('#custom-input').val();
            this.content(inputVal);
        }
    });
});
