define([
    'ko'
], function (ko) {
    'use strict';

    return ko.observableArray([
        {
            id: 1,
            title: ko.observable('A custom task'),
            status: ko.observable(0),
            parentId: ko.observable(2),
            created: ko.observable('08/05/2023'),
            updated: ko.observable('08/05/2023'),
        },
        {
            id: 2,
            title: ko.observable('Complete the todo list'),
            status: ko.observable(0),
            parentId: ko.observable(1),
            created: ko.observable('08/05/2023'),
            updated: ko.observable('08/05/2023'),
        },
    ]);
});
