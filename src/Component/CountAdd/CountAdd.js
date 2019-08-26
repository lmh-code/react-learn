import React, { Component } from 'react';
import store from '../../StoreFlux/index'
import './style.css'
class CountAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      count: store.getState().count
    };
  }
  render() {
    return (
      <div>
        <button className="btn-wrap"> - </button> {this.state.count} <button className="btn-wrap" onClick={this.doAddHandel.bind(this)}> + </button>
      </div>
    );
  }
  doAddHandel() {
    store.emit("increment")
  }
}

export default CountAdd;