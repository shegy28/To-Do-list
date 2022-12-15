jest.mock('./const.js');
import {addList, deleted} from './displayList.js';
describe('Add/Remove functions testing', () => {
    test('if addList() adds an item', () => {
      addList();
      addList();
      addList();
      const listArr = JSON.parse(localStorage.getItem('listArr'));
      expect(listArr.length).toBe(3);
    });
    
    

});