define(['ko', 'uiComponent'], function (ko, Component){
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Elogic_SimpleKoModule/timer',
            myFlag: true,
            titleFromKo: ko.observable(''),
            productName: ko.observable(''),
            wrongOne: ko.observable('wrong'),
            clock: ko.observable('')
        },

        initialize: function (config) {
            this._super();
            this.titleFromKo = config.titleMessage;
            this.productName = config.productNameFromPhtml;
            // console.log(this)
            // console.log(config)
            // console.log(this.getTitle())
            setInterval(this.reloadTime.bind(this), 1000)
        },

        getTitle: function () {
            // console.log(this.titleFromKo)
            // console.log(this.getThisExample())
            // console.log(this)
            return this.productName;
        },
        getFalseTitle: function () {
            // console.log(this)
            return this.wrongOne;
        },
        getThisExample: function () {
            // debugger;
            // console.log(this)
            return "Current this is";
        },
        reloadTime: function () {
            let date = new Date();
            const time = date.toTimeString().split(' ')[0].split(':');
            this.clock(time[0] + ':' + time[1] + ':' + time[2]);
        }
    })

})
