import React, { Component } from 'react';
import store from '../../StoreFlux/index'
import actions from '../../StoreFlux/actions'
import './style.css'
class CountAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      count: store.getState().count,
      todoList: store.getState().todoList,
      addTodoMsg: ''
    };

    this.stateChangeHandel = this.stateChangeHandel.bind(this)
  }

  // 组件挂在前 将事件进行监听
  componentWillMount() {
    // 将 action的create 添加到store的event中
    store.addChangeListener(this.stateChangeHandel);
  }

  render() {
    let todoListDom = this.state.todoList.map((item, index) => {
      return <div key={item.id} className="item-wrap">
                <div className="is-ok">{item.complete === true ? '是' : '否'}</div>
                <div className="txt-wrap"> {item.text}</div>
                <div className="delete-btn" onClick={() => {this.deleteHandel(item.id)}}>删除</div>
            </div>
    })
    return (
      <div>
        <button className="btn-wrap"> - </button> {this.state.count} <button className="btn-wrap"> + </button>

        <div className="item-wrap">
          <input type="text" name="addTodoMsg" onChange={this.inputChange.bind(this)}/>
          <div className="delete-btn" onClick={this.doAddMsgHandel.bind(this)}>添加</div>
        </div>

        <div>
          {todoListDom}
        </div>
      </div>
    );
  }
  
  // 组件销毁前 撤销事件的监听
  componentWillUnmount() {
    store.removeChangeListener(this.stateChangeHandel);
  }

  stateChangeHandel () {
    this.setState({
      todoList: store.getState().todoList
    });
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  doAddMsgHandel() {
    actions.createItem(this.state.addTodoMsg)
  }
  deleteHandel(_id) {
    actions.deleteItem(_id)
  }
}

export default CountAdd;