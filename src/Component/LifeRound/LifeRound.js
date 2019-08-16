import React, {Component} from 'react';

class LifeRound extends Component{
  constructor(props) {
    super(props)
    this.state = {
      num: 20
    }  
  }

  // 1 挂载之前  用处不大
  componentWillMount() {
    console.log("componentWillMount")
  }
  // 2 纯函数
  // （1）不能调用setState做数据的改变
  // （2）不作数据产生和保存
  // （3）返回数据和dom拼接好的jsx语句
  render() {
    console.log("render")
    return (
      <div className="App">
        <div>
          生命周期 点击我加一 {this.state.num}
        </div>
        <div>
          <button onClick={this.doAddHandel.bind(this)}>点击我加一</button>
        </div>
      </div>
    )
  }
  // 3 挂载完成
  // （1）dom挂载完成，并且渲染到真实的dom中
  // （2）可以做dom的处理
  // （3）可以做具体的事件操作
  // （4）某些插件的实例化
  componentDidMount() {
    console.log("componentDidMount")
  }

  /**
   * @description: 点击我加一
   * @param {type} 
   * @return: 
   */
  doAddHandel() {
    let num = this.state.num+1
    this.setState({
      num: num
    })
  }

  // 父子组件交互时使用
  componentWillReceiveProps(props) {
    // 当父组件传入子组件的值发生变改时，会执行次函数，可以将props再次赋值给子组件，也可以说是用来监听props值改变
    console.log("componentWillReceiveProps")
  }

  // 控制dom是否更新，用于优化使用，这是react提供的唯一一个可以优化diff算法的地方
  // 接受两个参数一个是父级传来的props，一个是state
  // 当父级传来的props变化是和本身的state数据变化是都会触发改函数
  shouldComponentUpdate(props, state) {
    console.log("props:", props)
    console.log("state:", state)
    if(state.num === this.state.num) {
      return false
    }else {
      return true
    }
  }

  componentWillUpdate() {
    console.log("componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
}

export default LifeRound;