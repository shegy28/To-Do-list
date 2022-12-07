import './style.css';
import {
  pushList, addList, showList, pushToLocal,
} from './modules/displayList.js';
import { addTask } from './modules/const.js';

window.addEventListener('load', () => {
  showList();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addList();
    pushList();
    pushToLocal();
  }
});