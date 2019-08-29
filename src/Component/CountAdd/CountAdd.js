import React, { Component } from 'react';
import store from '../../StoreFlux/index'
import actions from '../../StoreFlux/actions'
import './style.css'
class CountAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      count: store.getState('count'),
      todoList: store.getState('todoList'),
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
    let hasCount = this.state.todoList.filter((item) => {return item.complete === true}).length
    let noCount = this.state.todoList.length - hasCount
    let todoListDom = this.state.todoList.map((item, index) => {
      return <div key={item.id} className="item-wrap">
                <div className="is-ok" onClick={() => {this.changeState(index)}}>{item.complete === true ? '是' : '否'}</div>
                <div className="txt-wrap"> {item.text}</div>
                <div className="delete-btn" onClick={() => {this.deleteHandel(item.id)}}>删除</div>
            </div>
    })
    return (
      <div>
        <button className="btn-wrap" onClick={this.doMinHandel.bind(this)}> - </button> {this.state.count} <button className="btn-wrap" onClick={this.doAddCountHandel.bind(this)}> + </button>

        <div className="item-wrap" style={{borderTop: '1px solid #ececec', marginTop: '20px'}}>
          <div className="is-ok" onClick={this.doChooseAllHandel.bind(this)}>全选</div>
          <div className="txt-wrap"><input className="input-wrap" type="text" name="addTodoMsg" onChange={this.inputChange.bind(this)}/></div>
          <div className="delete-btn" onClick={this.doAddMsgHandel.bind(this)}>添加</div>
        </div>

        <div>
          {todoListDom}
        </div>
        <div className="tip-wrap">
          {hasCount} 个已完成  {noCount} 个未完成
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
      count: store.getState('count'),
      todoList: store.getState('todoList')
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
  changeState(_id) {
    actions.changeItemState(_id)
  }
  doChooseAllHandel () {
    actions.doChooseHandel()
  }
  doAddCountHandel () {
    actions.addCount()
  }
  doMinHandel() {
    actions.minCount()
  }
}

export default CountAdd;