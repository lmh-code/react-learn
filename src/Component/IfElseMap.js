import React, {Component} from 'react';
class IfElseMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEl: true,
      liList: [
        {
          id: 1,
          name: 'wo',
          age: 11
        },
        {
          id: 2,
          name: 'shi',
          age: 12
        },
        {
          id: 3,
          name: 'xiao',
          age: 13
        },
        {
          id: 4,
          name: 'hao',
          age: 14
        },
        {
          id: 5,
          name: 'hao',
          age: 15
        }
      ]
    }
  }

  render() {
    // 第一种
    let el1 = <h1>我是一级标题</h1>
    let el3 = <h3>我是三级标题</h3>
    let realDom = null
    if(this.state.showEl) {
      realDom = el1
    }else {
      realDom = el3
    }

    let newLiDom = this.state.liList.map((item, index,arr) => {
      return <li key={item.id}>你好，我的名字是：{item.name}，我的年龄是: {item.age}</li>
    })
    return (
      <div>
        {realDom}
        {/* 第二种 */}
        {this.state.showEl ? el1 : el3}
        {/* 第三种 */}
        {this.state.showEl && el1}

        {/* 数组便利渲染 */}
        <ul>
          {newLiDom}

          <button onClick={this.changeLiList.bind(this)}>修改list</button>
        </ul>
      </div>
    )
  }

  componentDidMount() {

  }

  changeLiList() {
    let liList = [
      {
        id: 1,
        name: 'wo',
        age: 11
      },
      {
        id: 3,
        name: 'xiao',
        age: 13
      },
      {
        id: 4,
        name: 'hao',
        age: 14
      },
      {
        id: 2,
        name: 'shi',
        age: 12
      },
      {
        id: 5,
        name: 'hao',
        age: 15
      }
    ]
    this.setState({
      liList: liList
    })
  }
}

export default IfElseMap;