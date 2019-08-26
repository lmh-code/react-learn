// imrc
import React, { Component } from 'react';
import Uuid from 'uuid/v4';
import localStorage from '../../Utils/localStorage'
// cccs
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor="username">用户名：</label>
          <input type="text" name="username" id="username" onChange={this.inputChange.bind(this)}/>
        </div>
        <div>
          <label htmlFor="password">密码：</label>
          <input type="password" name="password" id="password" onChange={this.inputChange.bind(this)}/>
        </div>
        <div>
          <button onClick={this.doLoginHandel.bind(this)}>登录</button>
        </div>
      </div>
    );
  }

  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  doLoginHandel() {
    let uuidVal = Uuid()
    let _params = {
      username: this.state.username,
      password: this.state.password,
      grant_type: 'password',
      uuid: uuidVal,
    }

    this.$http.postP('/authorization/login', {..._params}, {urlType: 1}).then(res => {
      if (!res.token_type || !res.access_token) {
        return res
      }
      // 移除后再缓存登录信息
      localStorage.remove('loginInfo')
      let selectstore = {}
      if(res.selectstore) {
        selectstore = JSON.parse(res.selectstore)
      }
      localStorage.set('loginInfo', {
        StoreName: selectstore.storeName,
        Operator: res['user:name'],
        UserNO: res['user:name'],
        UserName: res['user:nickname'],
        token_type: res.token_type,
        StoreSysNo: selectstore.storeSysNo,
        StoreNO: selectstore.storeNo,
        access_token: res.access_token,
        refresh_token: res.refresh_token,
        IsFirstLogin: res.isFirstLogin === '1',
        IsDC: true,
        net_token: res.net_token,
        dashboardPermission: res['user:dashboardPermission'],
        userName: res['user:name'],
        userNickname: res['user:nickname'],
        isFirstLogin: res.isFirstLogin === '1',
        expiresTime: res['user:expires'],
        selectStore: res.selectstore,
        loginTime: new Date().getTime()
      })
      this.props.history.push('/')
    }).catch(e => {})

  }
}

export default Login;