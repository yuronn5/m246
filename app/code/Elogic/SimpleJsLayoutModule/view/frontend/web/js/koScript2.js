define(['ko', 'uiComponent'], function (ko, Component){
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Elogic_SimpleJsLayoutModule/timer2',
            myFlag: true,
            titleFromKo: ko.observable(''),
        },

        initialize: function (config) {
            this._super();
            this.titleFromKo = config.titleMessage;

        }
    })

})
