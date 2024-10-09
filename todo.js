"use strict"; //enforces syntax

function addTask(task, taskList) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
}

function clearInput(inputField)  {
    inputField = "";
}

//exporting funct
export {addTask, clearInput};

//alt export method
export function sayHello() {
    alert("Hello!");
}