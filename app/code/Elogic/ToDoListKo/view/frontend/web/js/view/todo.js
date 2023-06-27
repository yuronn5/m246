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
            template: "Elogic_ToDoListKo/todo",
            todos: [],
            isVisible: ko.observable(0)
        },

        initialize() {
            this._super();

            this.isVisible(this.todos.length);
        }
    });
});
