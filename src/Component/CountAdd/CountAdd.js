import React, { Component } from 'react';
import store from '../../StoreFlux/index'
import './style.css'
class CountAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      count: store.getState().count,
      todoList: store.getState().todoList
    };
  }
  render() {
    let todoListDom = this.state.todoList.map((item, index) => {
      return <div key={item.id} className="item-wrap">
                <div className="is-ok">{item.complete === true ? '是' : '否'}</div>
                <div className="txt-wrap"> {item.text}</div>
                <div className="delete-btn">删除</div>
            </div>
    })
    return (
      <div>
        <button className="btn-wrap"> - </button> {this.state.count} <button className="btn-wrap" onClick={this.doAddHandel.bind(this)}> + </button>

        <div className="item-wrap">
          <input type="text"/>
          <div className="delete-btn">添加</div>
        </div>

        <div>
          {todoListDom}
        </div>
      </div>
    );
  }
  doAddHandel() {
    store.emit("increment")
  }
}

export default CountAdd;