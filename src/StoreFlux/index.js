import { EventEmitter } from 'events';
import types from './type';
import dispatcher from './dispatcher';
const CHANGE_EVENT = 'change';

const store = {
  ...EventEmitter.prototype,
  state: {
    count: 0,
    todoList: [
      { id: 0, text: 'AAAAAAAAAA', complete: true },
      { id: 1, text: 'BBBBBBBBBB', complete: false },
      { id: 2, text: 'CCCCCCCCCC', complete: true },
      { id: 3, text: 'DDDDDDDDDD', complete: false },
      { id: 4, text: 'EEEEEEEEEE', complete: false },
      { id: 5, text: 'FFFFFFFFFF', complete: true },
    ]
  },
  getState () {
    return this.state
  }
}
export default store 
