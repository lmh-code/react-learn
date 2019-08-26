import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Prompt
} from 'react-router-dom';

import App from '../Container/App'
import Login from '../Component/Login/Login'

import Home from '../Component/Home/Home'
import Tab from '../Component/Tab/Tab'
import TabOne from '../Component/Tab/TabOne'
import TabTwo from '../Component/Tab/TabTwo'

import NavLinkP from '../Component/NavLink/NavLinkP'
import NavLinkC from '../Component/NavLink/NavLinkC'
import NavLinkC1 from '../Component/NavLink/NavLinkC1'
import NavLinkC2 from '../Component/NavLink/NavLinkC2'

import UseMock from '../Component/UseMock/UseMock'
import CountAdd from '../Component/CountAdd/CountAdd'

let TabCom = () => {
  return (
    <Switch>
      <Tab component={Tab}>
        <Route path='/tab/one' component={TabOne}/>
        <Route path='/tab/two' component={TabTwo}/>
      </Tab>
    </Switch>
  )
}

let NavLinkDom = () => {
  return (
    <Switch>
      <NavLinkP component={NavLinkP}>
        <Route path='/navLink/c' component={NavLinkC}></Route>
        <Route path='/navLink/c1' component={NavLinkC1}></Route>
        <Route path='/navLink/c2' component={NavLinkC2}></Route>
      </NavLinkP>
    </Switch>
  )
}

let PageRouter = () => {
  return (
    <Router basename="/shop">
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/tab' component={TabCom}></Route>

          <Route path='/navLink' component={NavLinkDom}/>
          <Route path='/login' component={Login}/>
          <Route path='/useMock' component={UseMock}/>
          <Route path='/countAdd' component={CountAdd}/>
        </Switch>
      </App>
    </Router>
  ) 
}

export default PageRouter;