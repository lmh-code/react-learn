import React, {Component} from 'react';

class TabOne extends Component{
  constructor(props) {
    super(props);
    console.log("this.props:", this.props)
    this.state = {}
  }

  render() {
    return (
      <div>
        我是Tab页面 1
      </div>
    )
  }

  componentDidMount() {

  }
}

export default TabOne;