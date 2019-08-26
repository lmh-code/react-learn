import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom'

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to='/tab'>Tab页面</NavLink>
          </li>
          <li>
            <NavLink to='/navLink'>Nav导航页面</NavLink>
          </li>
          <li>
            <NavLink to='/useMock'>UseMock页面</NavLink>
          </li>
          <li>
            <NavLink to='/countAdd'>CountAdd计数器</NavLink>
          </li>
        </ul>
      </div>
    )
  }

  componentDidMount() {
    console.log("this.$http:", this.$http)
    
    // this.getMenuList()
    // this.getCityList()
  }
  getMenuList() {
    this.$http.post('/foundation/user/func/list', {clientId: 3, queryUserPower: true}).then(res => {
      console.log("res list:", res)
    }).catch(e=>{})
  }
  getCityList() {
    this.$http.get('/foundation/store/userStoreCityList').then(res => {
      console.log("res store:", res)
    }).catch(e=>{})
  }
}

export default Home;