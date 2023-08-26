import {
  addClearCompletedEventListener,
  displayUserInput,
} from './print.js';

import { tasks, createTaskListItem } from './tasks.js';

import './style.css';

const taskInput = document.getElementById('task');
const clearCompletedButton = document.getElementById('btn-clear-completed');
const outputList = document.getElementById('outputList');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const userInput = taskInput.value;
    taskInput.value = '';
    displayUserInput(userInput);
  }
});

window.addEventListener('load', () => {
  tasks.forEach((task) => {
    const listItem = createTaskListItem(task);
    // listItem.createEllipsisIcon(task);
    outputList.appendChild(listItem);
  });

  addClearCompletedEventListener(clearCompletedButton);
});
