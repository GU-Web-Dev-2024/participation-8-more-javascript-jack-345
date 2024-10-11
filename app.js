"use strict";

//import modules
import { addTask, clearInput } from "./todo.js";
import { saveTasks, loadTasks } from "./storage.js";

//import * as storage from "./storage.js";

//set up DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

//load tasks from local
const tasks = loadTasks();

tasks.forEach(element => {
    addTask(task, taskList);
});

//add event listener for new task
addTaskButton.addEventListener("click", () => {
    const task = newTaskInput.value.trim();

    if (task) {
        addTask(task, taskList);
        tasks.push(task);
        saveTasks(tasks);
        clearInput(newTaskInput);
    }
} );
//