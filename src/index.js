// import _ from 'lodash';
import {
  addClearCompletedEventListener,
  displayUserInput,
} from './print.js';

import './style.css';

const taskInput = document.getElementById('task');
const clearCompletedButton = document.getElementById('btn-clear-completed');

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const userInput = taskInput.value;
    taskInput.value = '';
    displayUserInput(userInput);
  }
});

window.addEventListener('load', () => {
  // renderTask();
  addClearCompletedEventListener(clearCompletedButton);
});
