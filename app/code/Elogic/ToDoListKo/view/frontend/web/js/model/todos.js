define([
    "ko"
], function (ko) {
    "use strict";

    return ko.observableArray([
        {
            "id": 1,
            "title": "Meetings",
            "description": "Attend daily meetings and discuss the agenda.",
            "start_date": "10 Mar 2023",
            "end_date": "15 Mar 2023",
            "completed_tasks": 5,
            "total_tasks": 10
        },
        {
            "id": 2,
            "title": "Meetings",
            "description": "Attend daily meetings and discuss the agenda.",
            "start_date": "10 Mar 2023",
            "end_date": "19 Mar 2023",
            "completed_tasks": 6,
            "total_tasks": 11
        },
        {
            "id": 3,
            "title": "Meetings",
            "description": "Attend daily meetings and discuss the agenda.",
            "start_date": "10 Mar 2023",
            "end_date": "26 Mar 2023",
            "completed_tasks": 3,
            "total_tasks": 7
        },
        {
            "id": 4,
            "title": "Deployment",
            "description": "Deployment process",
            "start_date": "18 Mar 2023",
            "end_date": "30 Mar 2023",
            "completed_tasks": 8,
            "total_tasks": 12
        }
    ])
});
