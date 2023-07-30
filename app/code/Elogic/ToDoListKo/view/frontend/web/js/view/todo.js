define([
    'uiComponent',
    'ko',
    'Elogic_ToDoListKo/js/model/todos'
], function (
    Component,
    ko,
    todos
) {
    'use strict';

    return Component.extend({
        defaults: {
            template: "Elogic_ToDoListKo/todo",

        },

        todos: todos,
        isVisible: ko.observable(0),

        initialize() {
            this._super();

            this.isVisible(this.todos().length);
        },

        getProgressCount: function (completedTasks, totalTasks) {
            if (isNaN(completedTasks) || isNaN(totalTasks)) {
                return 0;
            }

            let percentage = parseInt(Math.floor(Math.round(completedTasks/totalTasks * 100)));
            return !isNaN(percentage) ? percentage : 0;
        }
    });
});
