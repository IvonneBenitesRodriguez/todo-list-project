import { createEllipsisIcon } from "./print";

export const tasks = [
  {
    description: 'Go to the market',
    completed: false,
    index: 0
  },
];

export function createTaskListItem(task) {
  const listItem = document.createElement('li');
  listItem.classList = 'solo-task';

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkBox');
  checkBox.classList = 'complete';
  checkBox.checked = task.completed;

  const description = document.createElement('span');
  description.textContent = task.description;

  const ellipsisIcon = createEllipsisIcon();


  listItem.appendChild(checkBox);
  listItem.appendChild(description);
  listItem.appendChild(ellipsisIcon);

  return listItem;
}
