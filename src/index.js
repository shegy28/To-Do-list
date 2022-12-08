import './style.css';
import {
  pushList, addList, showList, pushToLocal, clear
} from './modules/displayList.js';
import { addTask, clearAll, } from './modules/const.js';

window.addEventListener('load', () => {
  showList();
});

addTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addList();
    if(addTask.value == ""){
      alert("Action cant be empty");
      showList();
    }else{
    pushList();
    pushToLocal();
    }
  }
});

clearAll.addEventListener ('click', () => {
  clear();
  pushList();
  pushToLocal();
});