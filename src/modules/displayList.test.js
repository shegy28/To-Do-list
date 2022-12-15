import { addList, deleted, } from './displayList.js';
import { completedFalse, completedTrue } from './checkbox.js';

jest.mock('./const.js');
describe('Add/Remove functions testing', () => {
  test('if addList() adds an item', () => {
    addList();
    addList();
    addList();
    const listArr = JSON.parse(localStorage.getItem('listArr'));
    expect(listArr.length).toBe(3);
  });

  test('if deleted() delete an item', () => {
    deleted(0);
    const listArr = JSON.parse(localStorage.getItem('listArr'));
    expect(listArr.length).toBe(2);
  });
});

describe('edit,update and clear function testing', () => {
  test('update for completedfalse', () => {
    const listArr = JSON.parse(localStorage.getItem('listArr'));
    completedFalse(listArr,1);
    localStorage.setItem('listArr', JSON.stringify(listArr));
    expect(listArr[1].completed).toBe(false);
  });

  test('update for completedTrue', () => {
    const listArr = JSON.parse(localStorage.getItem('listArr'));
    completedTrue(listArr,1);
    localStorage.setItem('listArr', JSON.stringify(listArr));
    expect(listArr[1].completed).toBe(true);
  });
})
