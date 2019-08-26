import React, {Component} from 'react';
import MockData from '../../Mock/useMockData'

class UseMock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],

      userList: []
    }
  }

  render() {
    let liDoms = this.state.tableData.map((item, index) => {
      return <li key={item.key}>{item.mockContent}</li>
    })

    let userListDom = this.state.userList.map((item, index) => {
      return <div key={item.key}>用户名: {item.userName}, 年龄：{item.userAge}, 地址：{item.address}</div>
    })
    return (
      <div>
        <ul>
          {liDoms}
        </ul>

        {userListDom}
      </div>
    )
  }

  componentDidMount() {
    this.$http.get('/mock/goods/getGoodsList').then(res => {
      this.setState({
        tableData: res.dataSource || []
      })
    }).catch(err => {
      console.log("err:", err)
    })

    this.$http.post('/mock/user/getUserList').then(res => {
      this.setState({
        userList: res.dataSource || []
      })
    }).catch(err => {
      console.log("err:", err)
    })
  }
}

export default UseMock;