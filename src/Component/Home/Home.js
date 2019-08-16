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
        </ul>
      </div>
    )
  }

  componentDidMount() {

  }
}

export default Home;