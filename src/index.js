import './style.css';
import {
  pushList, addList, showList, pushToLocal, clear, deleted,
} from './modules/displayList.js';
import { addTask, clearAll, listItems } from './modules/const.js';

window.addEventListener('load', () => {
  showList();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addTask.value === '') {
      addTask.innerText += "To-Do list can't be empty";
    } else {
      addList();
      pushList();
      pushToLocal();
    }
  }
});

clearAll.addEventListener('click', () => {
  clear();
  pushList();
  pushToLocal();
});

listItems.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode.parentNode;
  if (!parentElement.classList.contains('each-list')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;
  if (action === 'delete') {
    deleted(eachListId);
    pushList();
  }
});
