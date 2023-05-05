define(["ko", 'Macademy_InventoryFulfillment/js/ko/extenders/numeric'], function (ko) {
    'use strict';

    const boxConfiguration = () => {
        const divisor = 139;
        const data = {
            length: ko.observable().extend({numeric: true}),
            width: ko.observable().extend({numeric: true}),
            height: ko.observable().extend({numeric: true}),
            weight: ko.observable().extend({numeric: true}),
            unitsPerBox: ko.observable().extend({numeric: true}),
            numberOfBoxes: ko.observable().extend({numeric: true}),
        }

        data.dimensionalWeight = ko.computed(() => {
            const result = data.length() * data.width() * data.height() / divisor;
            return Math.round(result * data.numberOfBoxes());
            // require('uiRegistry').get('boxConfigurations').boxConfigurationsModel.boxConfigurations()[0].dimensionalWeight()
        })

        return data;
    }

    return {
        boxConfigurations: ko.observableArray([boxConfiguration()]),
        isSuccess: ko.observable(false),
        numberOfBoxes: function () {
            return ko.computed(() => {
                return this.boxConfigurations().reduce(function (runningTotal, boxConfiguration) {
                    return runningTotal + (boxConfiguration.numberOfBoxes() || 0)
                }, 0);
            })
        },
        add: function () {
            this.boxConfigurations.push(boxConfiguration());
        },
        delete: function (index) {
            this.boxConfigurations.splice(index, 1);
        }
    }
});
