import { addTask} from "./const.js";

let listArr = [];
const addList = () => {
    const obj = {};
    obj.index = addList.length;
    obj.description = addTask.value;
    obj.completed = false;
    listArr.push(obj);
  };

export default addList;  