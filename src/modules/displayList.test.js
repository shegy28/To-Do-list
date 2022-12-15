import { addList } from './displayList.js';

jest.mock('./const.js');
describe('Add/Remove functions testing', () => {
  test('if addList() adds an item', () => {
    addList();
    addList();
    addList();
    const listArr = JSON.parse(localStorage.getItem('listArr'));
    expect(listArr.length).toBe(3);
  });
});