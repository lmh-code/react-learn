import React, {Component} from 'react';
import axios from 'axios'
import '../../../Mock/useMockData'

class UseMock extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        mock
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://127.0.0.1/mock/goods/getGoodsList').then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err)
    })
  }
}

export default UseMock;