import React, {Component} from 'react';
import Child from './Child'
import Child1 from './Child1'
import eventProxy from '../../Utils/eventProxy'
class Parent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      parentName: '八八',
      parentFrom: '河南省',
      parentAge: 50
    }

    eventProxy.$on('changeAge', (_params) => {
      this.setState({
        parentAge: _params.parentAge
      })
    })
  }
  render() {
    return (
      <div>
        <div>我是父组件,我的名字叫：{this.state.parentName}，我来自：{this.state.parentFrom}，我的年龄是：{this.state.parentAge}</div>
        =========================================
        =========================================
        {/* 子组件之间通讯 第一种方式  不建议使用 */}
        {/* <Child parentName={this.state.parentName} parentFrom={this.state.parentFrom} parentAge={this.state.parentAge} ageChange={this.ageChange.bind(this)}/>
        =========================================
        =========================================
        <Child1 parentName={this.state.parentName} parentFrom={this.state.parentFrom} parentAge={this.state.parentAge}/> */}

        <Child parentName={this.state.parentName} parentFrom={this.state.parentFrom} parentAge={this.state.parentAge}/>
        =========================================
        =========================================
        <Child1 parentName={this.state.parentName} parentFrom={this.state.parentFrom} parentAge={this.state.parentAge}/>
      </div>
    )
  }
  componentDidMount() {
    // this.ageAdd()
  }
  /**
   * @description: 每两秒钟年龄加一
   * @param {type} 
   * @return: 
   */
  ageAdd() {
    setInterval(() => {
      let ageNum = this.state.parentAge + 1
      this.setState({
        parentAge: ageNum
      })
    }, 1000);
  }

  /**
   * @description: 父组件年龄发生变化
   * @param {type} 
   * @return: 
   */
  ageChange(_params) {
    console.log("_params:", _params.parentAge)
    this.setState({
      parentAge: _params.parentAge
    })
  }

  
}

export default Parent;