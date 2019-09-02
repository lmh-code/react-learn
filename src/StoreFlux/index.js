import { EventEmitter } from 'events';
import type from './type';

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
  getState (_val) {
    if(_val) {
      return this.state[_val]
    }else {
      return this.state
    }
  },
  addChangeListener (cb) {
    this.on(type.CHANGE_EVENT, cb)
  },
  removeChangeListener (cb) {
    this.removeListener(type.CHANGE_EVENT, cb)
  },
  minCount () {
    this.state.count = this.state.count - 1
  },
  addCount () {
    this.state.count = this.state.count + 1
  },
  createItem (data) {
    // 生成一个随机的id
    let id = Number.parseInt(Math.random() * 1000000);
    const todoItem = {
      id: id,
      text: data,
      complete: false
    };
    this.state.todoList.unshift(todoItem);
  },
  deleteItem (_id) {
    let listTemp = this.state.todoList.filter((item) => {
      return item.id !== _id
    })
    this.state.todoList = listTemp
  },
  changeState (_idx) {
    this.state.todoList[_idx].complete = !this.state.todoList[_idx].complete
  },
  doChooseHandel () {
    let todoListTemp = this.state.todoList.map((item) => {
      item.complete = true
      return item
    })
    this.state.todoList = todoListTemp
  }
}
export default store 
