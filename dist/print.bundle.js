"use strict";
(self["webpackChunktodo_list_project"] = self["webpackChunktodo_list_project"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCheckBoxEventListener: () => (/* binding */ addCheckBoxEventListener),
/* harmony export */   addClearCompletedEventListener: () => (/* binding */ addClearCompletedEventListener),
/* harmony export */   createCheckBox: () => (/* binding */ createCheckBox),
/* harmony export */   createEllipsisIcon: () => (/* binding */ createEllipsisIcon),
/* harmony export */   createLineBreak: () => (/* binding */ createLineBreak),
/* harmony export */   createListItemText: () => (/* binding */ createListItemText),
/* harmony export */   createTaskContainer: () => (/* binding */ createTaskContainer),
/* harmony export */   displayUserInput: () => (/* binding */ displayUserInput)
/* harmony export */ });
// const taskInput = document.getElementById('task');
const outputList = document.getElementById('outputList');
const clearCompletedButton = document.getElementById('btn-clear-completed');

function createTaskContainer() {
  const container = document.createElement('label');
  container.classList = 'task-container';
  return container;
}

function createCheckBox() {
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList = 'complete';
  return checkBox;
}

function createListItemText(input) {
  const listItem = document.createElement('span');
  listItem.classList = 'input-text';
  listItem.textContent = input;
  return listItem;
}

function createEllipsisIcon() {
  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList = 'fa-solid fa-ellipsis-vertical';
  return ellipsisIcon;
}

function createLineBreak() {
  return document.createElement('br');
}

function addCheckBoxEventListener(checkBox, listItem) {
  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  });
}

function addClearCompletedEventListener(clearCompletedButton) {
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

function displayUserInput(input) {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtcHJvamVjdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzaycpO1xuY29uc3Qgb3V0cHV0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXRMaXN0Jyk7XG5jb25zdCBjbGVhckNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tY2xlYXItY29tcGxldGVkJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBjb250YWluZXIuY2xhc3NMaXN0ID0gJ3Rhc2stY29udGFpbmVyJztcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCkge1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICBjaGVja0JveC5jbGFzc0xpc3QgPSAnY29tcGxldGUnO1xuICByZXR1cm4gY2hlY2tCb3g7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0SXRlbVRleHQoaW5wdXQpIHtcbiAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGxpc3RJdGVtLmNsYXNzTGlzdCA9ICdpbnB1dC10ZXh0JztcbiAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBpbnB1dDtcbiAgcmV0dXJuIGxpc3RJdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxsaXBzaXNJY29uKCkge1xuICBjb25zdCBlbGxpcHNpc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGVsbGlwc2lzSWNvbi5jbGFzc0xpc3QgPSAnZmEtc29saWQgZmEtZWxsaXBzaXMtdmVydGljYWwnO1xuICByZXR1cm4gZWxsaXBzaXNJY29uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGluZUJyZWFrKCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENoZWNrQm94RXZlbnRMaXN0ZW5lcihjaGVja0JveCwgbGlzdEl0ZW0pIHtcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQpIHtcbiAgICAgIGxpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RJdGVtLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGVhckNvbXBsZXRlZEV2ZW50TGlzdGVuZXIoY2xlYXJDb21wbGV0ZWRCdXR0b24pIHtcbiAgY2xlYXJDb21wbGV0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVkQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZTpjaGVja2VkJyk7XG4gICAgY29tcGxldGVkQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgIGNvbnN0IGxpbmVCcmVhayA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JyJyk7XG4gICAgICBpZiAobGluZUJyZWFrKSB7XG4gICAgICAgIGxpbmVCcmVhay5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVtYWluaW5nTGluZUJyZWFrcyA9IG91dHB1dExpc3QucXVlcnlTZWxlY3RvckFsbCgnYnInKTtcbiAgICByZW1haW5pbmdMaW5lQnJlYWtzLmZvckVhY2goKGxpbmVCcmVhaykgPT4ge1xuICAgICAgbGluZUJyZWFrLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlVc2VySW5wdXQoaW5wdXQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlVGFza0NvbnRhaW5lcigpO1xuICBjb25zdCBjaGVja0JveCA9IGNyZWF0ZUNoZWNrQm94KCk7XG4gIGNvbnN0IGxpc3RJdGVtID0gY3JlYXRlTGlzdEl0ZW1UZXh0KGlucHV0KTtcbiAgY29uc3QgZWxsaXBzaXNJY29uID0gY3JlYXRlRWxsaXBzaXNJY29uKCk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsbGlwc2lzSWNvbik7XG5cbiAgb3V0cHV0TGlzdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGFkZENoZWNrQm94RXZlbnRMaXN0ZW5lcihjaGVja0JveCwgbGlzdEl0ZW0pO1xuICBhZGRDbGVhckNvbXBsZXRlZEV2ZW50TGlzdGVuZXIoY2xlYXJDb21wbGV0ZWRCdXR0b24pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9