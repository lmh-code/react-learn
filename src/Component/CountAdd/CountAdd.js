import React, { Component } from 'react';
import store from '../../StoreFlux/index'
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
        计数器当前数据：{this.state.count}
      </div>
    );
  }
}

export default CountAdd;