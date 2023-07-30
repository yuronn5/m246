define([
    './abstract',
    'ko',
    'Elogic_ToDoListKo/js/model/todos'
], function (
    Component,
    ko,
    todos
) {
    'use strict';

    var todoObj;

    return Component.extend({
        defaults: {
            template: "Elogic_ToDoListKo/todo",

        },

        todos: todos,
        isVisible: ko.observable(0),
        isTodoVisible: ko.observable(false),

        initialize() {
            this._super();
            todoObj = this;
            this.isVisible(this.todos().length);
            this.isTodoVisible.subscribe(function (value) {
                if (value) {
                    this.getPopup().openModal();
                }
            }, this);
        },

        getProgressCount: function (completedTasks, totalTasks) {
            if (isNaN(completedTasks) || isNaN(totalTasks)) {
                return 0;
            }

            let percentage = parseInt(Math.floor(Math.round(completedTasks/totalTasks * 100)));
            return !isNaN(percentage) ? percentage : 0;
        },

        editTodo: function () {
            todoObj.isTodoVisible(true);
        },

        afterBindClosePopUp: function () {
            this._super();
            this.isTodoVisible(false);
        },
    });
});
