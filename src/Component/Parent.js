import React, {Component} from 'react';
import Child from './Child'
class Parent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      parentName: '八八',
      parentFrom: '河南省',
      parentAge: 50
    }
  }
  render() {
    return (
      <div>
        <div>我是父组件,我的名字叫：{this.state.parentName}，我来自：{this.state.parentFrom}，我的年龄是：{this.state.parentAge}</div>
        ======================================================================================
        ======================================================================================
        <Child parentName={this.state.parentName} parentFrom={this.state.parentFrom} parentAge={this.state.parentAge} ageChange={this.ageChange.bind(this)}/>
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
    console.log("_params:", _params)
    let ageNum = this.state.parentAge + 1
    this.setState({
      parentAge: ageNum
    })
  }
}

export default Parent;