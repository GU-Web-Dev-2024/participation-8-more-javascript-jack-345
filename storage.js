"use strict";

function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

function loadTasks() {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

//exports
export {saveTasks, loadTasks};