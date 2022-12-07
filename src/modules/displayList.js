import {listItems, addTask} from "./const.js";

let listArr = [];

const addList = () => {
  const obj = {};
  obj.index = listArr.length;
  obj.description = addTask.value;
  obj.completed = false;
  listArr.push(obj);
};

const pushToLocal = () => {
  localStorage.setItem('listArr', JSON.stringify(listArr));
};


const pushList = () => {
  listItems.innerHTML = '';
  listArr.forEach((obj) => {
    const toDo = `<li>
      <div><input type="checkbox"></div>
      <div class="title a-list">
          <p>
              ${obj.description}
          <p>
          <button class='delete-btn' data-id="${obj.index}"><i class="fa fa-ellipsis-v"></i></button>
      </div>
    </li>`;
    listItems.innerHTML += toDo;
    addTask.value ='';
  });
  const listRemoveBtn = document.querySelectorAll('.delete-btn');

  listRemoveBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSet = parseInt(button.dataset.id, 10);
      const buttonId = listArr.findIndex((object) => object.id === dataSet);
      console.log(buttonId);
      const deleted = (id) => {
        listArr.splice(id, 1);
        pushList();
        localStorage.setItem('listArr', JSON.stringify(listArr));
      };
      deleted(buttonId);
    });
  });
};

const showList = () => {
  if (localStorage.getItem('listArr')) {
    listArr = JSON.parse(localStorage.getItem('listArr'));
  }
  pushList();
};



export { pushList, addList, showList, pushToLocal};