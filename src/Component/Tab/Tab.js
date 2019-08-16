import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Tab extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <p>我是Tab切换页面</p> 
        <Link to={{
            pathname: '/tab/one',
            search: '?sort=id',
            hash: '#the-hash',
            state: {
              fromDashboard: true,
              id: 22 
            }
          }}>TabOne</Link>

        <Link to='/tab/two'>TabTwo</Link>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {

  }
}

export default Tab;