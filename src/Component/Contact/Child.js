import React, {Component} from 'react';
// 该插件来控制props的类型值
import PropTypes from 'prop-types';
import eventProxy from '../../Utils/eventProxy';

class Child extends Component {
  constructor(props) {
    console.log("props:", props)
    super(props);
    console.log("this.props:", this.props)
    this.state = {
      parentName: this.props.parentName?this.props.parentName:'暂时无法获取父组件姓名',
      parentFrom: this.props.parentFrom?this.props.parentFrom:'暂时无法获取出处',
      parentAge: this.props.parentAge?this.props.parentAge:'24',

      chileName: '七七',
      childAge: 22,
      childFrom: '南阳市'
    }
  }
  render() {
    console.log("render")
    return (
      <div>
        <div>
          我是子组件，我的名字是：{this.state.chileName},我来自：{this.state.childFrom},我的年龄是：{this.state.childAge}
          {/* <button onClick={this.changeChildAge.bind(this)}>点击让我的和父级的年龄加一</button> */}

          <button onClick={this.ageChangeByEyes.bind(this)}>点击让我的和父级的年龄加一使用观察者模式</button>
        </div>

        <div>
          我的父组件名字是:{this.state.parentName}，来自:{this.state.parentFrom}，年龄是:{this.state.parentAge}
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  /**
   * @description: 儿子年龄递增
   * @param {type} 
   * @return: 
   */
  changeChildAge() {
    let ageNum = this.state.childAge + 1
    let parentAgeNum = this.state.parentAge + 1
    this.setState({
      childAge: ageNum,
      parentAge: parentAgeNum
    })

    // 调用父级方法使父级状态发生变化
    const {ageChange} = this.props
    ageChange({parentAge: parentAgeNum})
  }

  /**
   * @description: 通过观察者模式
   * @param {type} 
   * @return: 
   */
  ageChangeByEyes() {
    let ageNum = this.state.childAge + 1
    let parentAgeNum = this.state.parentAge + 1
    this.setState({
      childAge: ageNum,
      parentAge: parentAgeNum
    })
    eventProxy.$emitOneParam('changeAge', {parentAge: parentAgeNum})
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps:", nextProps)
    // let ageNum = this.state.childAge + 1
    // this.setState({
    //   parentAge: nextProps.parentAge,
    //   childAge: ageNum
    // })
  }

  /**
   * @description: 当父组件的props和自身的state发生变化会触发改事件
   * @param {type} 
   * @return: 
   */
  shouldComponentUpdate(nextProps, state) {
    if(nextProps.parentAge >= 80 || state.childAge >= 80) {
      return false;
    }else {
      return true;
    }
  }

}

// 一定要写在最外边
Child.propTypes  = {
  parentName: PropTypes.string
}
export default Child;