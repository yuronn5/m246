define([
    './abstract',
    'ko',
    'underscore',
    'Elogic_ToDoListKo/js/model/todos',
    'jquery'
], function (
    Component,
    ko,
    _,
    todos,
    $
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
        todoFieldset: 'km-todo-scope.todo.todo-fieldset',
        fields: ['title', 'description', 'start_date', 'end_date'],

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

        editTodo: function (item) {
            todoObj.isTodoVisible(true);
            console.log(item);
            todoObj.source.set('todo', {
                id: item.id,
                title: item.title(),
                description: item.description(),
                completed_tasks: item.completed_tasks(),
                total_tasks: item.total_tasks()
            });
            $('input[name="start_date"]').val(
                new Date(item.start_date()).toLocaleDateString('en-US'),
                { day: 'short' }
            ).trigger('change');
            $('input[name="end_date"]').val(
                new Date(item.end_date()).toLocaleDateString('en-US'),
                { day: 'short' }
            ).trigger('change');
        },

        afterBindClosePopUp: function () {
            this._super();
            this.isTodoVisible(false);
        },

        getPopUpButtons: function (btnArr) {
            btnArr.push({
                text: 'Save',
                class: 'actions primary',
                click: this.saveTodoForm.bind(this)
            });
            return btnArr;
        },

        saveTodoForm: function () {
            todoObj.source.set('params.invalid', false)
            let item = todoObj.source.get('todo');
            todoObj.triggerValidations();
            if (todoObj.source.get('params.invalid')) {
                return;
            }

            if (item.id === undefined || !item.id) {
                item.id = todoObj.todos().length + 1;
                todoObj.todos.push(todoObj._convertToObservables(item));

                todoObj.getPopup().closeModal();
                return;
            }

            let index = _.findIndex(todoObj.todos(), {
                id: item.id
            });

            if (index < 0 || index === undefined) {
                alert("Something went wrong");
                return;
            }

            todoObj.todos.replace(todoObj.todos()[index], todoObj._convertToObservables(item));

            todoObj.getPopup().closeModal();
        },

        createNewTodo: function () {
            todoObj.editTodo({
                id: 0,
                title: ko.observable(''),
                description: ko.observable(''),
                completed_tasks: ko.observable(0),
                total_tasks: ko.observable(0),
                start_date: ko.observable(new Date()),
                end_date : ko.observable(new Date()),
            })
        },

        _convertToObservables: function (item) {
            return {
                id: item.id,
                title: ko.observable(item.title),
                description: ko.observable(item.description),
                start_date: ko.observable(item.start_date),
                end_date: ko.observable(item.end_date),
                completed_tasks: ko.observable(item.completed_tasks),
                total_tasks: ko.observable(item.total_tasks),
            }
        },

        triggerValidations: function () {
            _.each(this.fields, function (field, key) {
                this.validateForm(this.todoFieldset + '.' + field);
            }, this);
        }
    });
});
