const outputList = document.getElementById('outputList');
const clearCompletedButton = document.getElementById('btn-clear-completed');

export function createTaskContainer() {
  const container = document.createElement('label');
  container.classList = 'task-container';
  return container;
}

export function createCheckBox() {
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList = 'complete';
  return checkBox;
}

export function createListItemText(input) {
  const listItem = document.createElement('span');
  listItem.classList = 'input-text';
  listItem.textContent = input;
  return listItem;
}

export function createEllipsisIcon() {
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList = 'fa-solid fa-ellipsis-vertical';
  return ellipsisIcon;
}

export function createLineBreak() {
  return document.createElement('br');
}

export function addCheckBoxEventListener(checkBox, listItem) {
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  });
}

export function addClearCompletedEventListener(clearCompletedButton) {
  clearCompletedButton.addEventListener('click', () => {
    const completedContainers = document.querySelectorAll('.complete:checked');
    completedContainers.forEach((container) => {
      const lineBreak = container.parentElement.querySelector('br');
      if (lineBreak) {
        lineBreak.remove();
      }
      container.parentElement.remove();
    });

    const remainingLineBreaks = outputList.querySelectorAll('br');
    remainingLineBreaks.forEach((lineBreak) => {
      lineBreak.remove();
    });
  });
}

export function displayUserInput(input) {
  const container = createTaskContainer();
  const checkBox = createCheckBox();
  const listItem = createListItemText(input);
  const ellipsisIcon = createEllipsisIcon();

  container.appendChild(checkBox);
  container.appendChild(listItem);
  container.appendChild(ellipsisIcon);

  outputList.appendChild(container);

  addCheckBoxEventListener(checkBox, listItem);
  addClearCompletedEventListener(clearCompletedButton);
}
