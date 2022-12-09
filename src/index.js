import './style.css';
import {
  pushList, addList, showList, pushToLocal, clear,
} from './modules/displayList.js';
import { addTask, clearAll } from './modules/const.js';

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