import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom'
import './Style.css'

class NavLinkP extends Component{
  constructor(props) {
    super(props);
    this.state = {
      routerName: ''
    }
  }
  
  render() {
    return (
      <div>
         <div className="nav-link-wrap">
            <p className="nav-link-item">
              <NavLink to='/navLink/c' activeClassName="selected" 
              isActive={this.activeEvent.bind(this)}>To C</NavLink>
            </p>
            <p className="nav-link-item">
              <NavLink to='/navLink/c1' activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }} isActive={this.activeEvent.bind(this)}>To C1</NavLink>
            </p>
            <p className="nav-link-item">
              <NavLink to='/navLink/c2' activeClassName="selected" isActive={this.activeEvent.bind(this)}>To C2</NavLink>
            </p>
         </div>
        
          {this.state.routerName}
          {this.props.children}
      </div>
    )
  }

  activeEvent(match, location) {
    if(match) {
      console.log("location:", location)
      console.log("location.pathname:", location.pathname)
      return true;
    }else {
      return false
    }
  }
}

export default NavLinkP;