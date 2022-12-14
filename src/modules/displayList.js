import { listItems, addTask } from './const.js';
import { completedTrue, completedFalse } from './checkbox.js';

let listArr = [];

const pushToLocal = () => {
  localStorage.setItem('listArr', JSON.stringify(listArr));
};

const addList = () => {
  const obj = {};
  obj.index = listArr.length + 1;
  obj.description = addTask.value;
  obj.completed = false;
  listArr.push(obj);
  pushToLocal();
};

const deleted = (id) => {
  listArr.splice(id, 1);
  for (let i = 0; i < listArr.length; i += 1) {
    listArr[i].index = i + 1;
  }
  pushToLocal();
};

const edit = (id, value) => {
  listArr[id].description = value;
  pushToLocal();
};

const pushList = () => {
  listItems.innerHTML = '';
  listArr.forEach((obj) => {
    const toDo = `<li class="each-list" id="${obj.index - 1}">
      <div><input class= "check-box" type="checkbox" data-id="${obj.index}"></div>
      <div class="title a-list">
          <input data-id="${obj.index}" class= "list-input" type = "text" value = "${obj.description}" data-action ="edit">
          <button class="delete-btn"><i class="fa fa-trash" data-action ="delete"></i></button>
      </div>
    </li>`;
    listItems.innerHTML += toDo;
    addTask.value = '';
  });

  // const inputDescription = document.querySelectorAll('.list-input');
  // inputDescription.forEach((toDo) => {
  //   toDo.addEventListener('focusout', () => {
  //     const dataSet = parseInt(toDo.dataset.id, 10);
  //     const toDoId = listArr.findIndex((object) => object.index === dataSet);
  //     listArr[toDoId].description = toDo.value;
  //     const update = () => {
  //       pushList();
  //       localStorage.setItem('listArr', JSON.stringify(listArr));
  //     };
  //     update();
  //   });
  // });

  const checkBox = document.querySelectorAll('.check-box');
  checkBox.forEach((tick) => {
    tick.addEventListener('change', (e) => {
      if (e.currentTarget.checked) {
        const dataSet = parseInt(tick.dataset.id, 10);
        const tickId = listArr.findIndex((object) => object.index === dataSet);
        completedTrue(listArr, tickId);
        pushToLocal();
      } else {
        const dataSet = parseInt(tick.dataset.id, 10);
        const tickId = listArr.findIndex((object) => object.index === dataSet);
        completedFalse(listArr, tickId);
        pushToLocal();
      }
    });
  });
};

const clear = () => {
  listArr = JSON.parse(localStorage.getItem('listArr'));
  listArr = listArr.filter((obj) => obj.completed === false);
  for (let i = 0; i < listArr.length; i += 1) {
    listArr[i].index = i + 1;
  }
  pushToLocal();
};

const showList = () => {
  if (localStorage.getItem('listArr')) {
    listArr = JSON.parse(localStorage.getItem('listArr'));
  }
  pushList();
};

export {
  pushList, addList, showList, pushToLocal, clear, deleted, edit,
};