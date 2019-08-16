import React, {Component} from 'react';
import eventProxy from '../../Utils/eventProxy';

class Child1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: this.props.parentName?this.props.parentName:'暂时无法获取父组件姓名',
      parentFrom: this.props.parentFrom?this.props.parentFrom:'暂时无法获取出处',
      parentAge: this.props.parentAge?this.props.parentAge:'24',

      chileName: '六六',
      childAge: 18,
      childFrom: '方城县'
    }

    // 使用观察者模式改变值
    eventProxy.$on('changeAge', (_params) => {
      this.setState({
        parentAge: _params.parentAge
      })
    })
  }

  render() {
    return (
      <div>
        我是子组件，我的名字是：{this.state.chileName},我来自：{this.state.childFrom},我的年龄是：{this.state.childAge}

        <div>
          我的父组件名字是:{this.state.parentName}，来自:{this.state.parentFrom}，年龄是:{this.state.parentAge}
        </div>
      </div>
    )
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // 使用普通模式子组件之间通信
    // let ageNum = this.state.childAge + 1
    // this.setState({
    //   parentAge: nextProps.parentAge,
    //   childAge: ageNum
    // })
  }
}

export default Child1;