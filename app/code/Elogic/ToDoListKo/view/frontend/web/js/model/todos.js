define([
    "ko"
], function (ko) {
    "use strict";

    return ko.observableArray([
        {
            "id": 1,
            "title": ko.observable("Meetings"),
            "description": ko.observable("Attend daily meetings and discuss the agenda."),
            "start_date": ko.observable("10 Mar 2023"),
            "end_date": ko.observable("15 Mar 2023"),
            "completed_tasks": ko.observable(5),
            "total_tasks": ko.observable(10)
        },
        {
            "id": 2,
            "title": ko.observable("Meetings"),
            "description": ko.observable("Attend daily meetings and discuss the agenda."),
            "start_date": ko.observable("10 Mar 2023"),
            "end_date": ko.observable("19 Mar 2023"),
            "completed_tasks": ko.observable(6),
            "total_tasks": ko.observable(11)
        },
        {
            "id": 3,
            "title": ko.observable("Meetings"),
            "description": ko.observable("Attend daily meetings and discuss the agenda."),
            "start_date": ko.observable("10 Mar 2023"),
            "end_date": ko.observable("26 Mar 2023"),
            "completed_tasks": ko.observable(3),
            "total_tasks": ko.observable(7)
        },
        {
            "id": 4,
            "title": ko.observable("Deployment"),
            "description": ko.observable("Deployment process"),
            "start_date": ko.observable("18 Mar 2023"),
            "end_date": ko.observable("30 Mar 2023"),
            "completed_tasks": ko.observable(8),
            "total_tasks": ko.observable(12)
        }
    ])
});
