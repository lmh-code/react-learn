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
    this.dataSource()

    this.promiseHandel()
  }

  async dataSource() {
    console.log(1)
    await this.$http.get('/mock/goods/getGoodsList').then(res => {
      this.setState({
        tableData: res.dataSource || []
      })
    }).catch(err => {
      console.log("err:", err)
    })

    await this.$http.post('/mock/user/getUserList').then(res => {
      this.setState({
        userList: res.dataSource || []
      })
    }).catch(err => {
      console.log("err:", err)
    })
  }


  /**
   * @description: Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。
   * @param {type} 
   * @return: 
   */
  promiseHandel() {
    console.log(2)
    let p1 = new Promise((resolve, reject) => {
      this.$http.get('/mock/goods/getGoodsList').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
    let p2 = new Promise((resolve, reject) => {
      this.$http.get('/mock/user/getUserList').then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
    Promise.all([p1, p2]).then(res=>{
      console.log("Promise.all res:", res)
    }).catch(err=>{})
  }

}

export default UseMock;