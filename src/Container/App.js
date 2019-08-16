import React, {Component} from 'react';
import './App.css';
// import LifeRound from '../Component/LifeRound/LifeRound'
// import Parent from '../Component/Contact/Parent'
// import IfElseMap from '../Component/IfElseMap/IfElseMap'
// import FormSubmit from '../Component/FormSubmit/FormSubmit'
// import Shopping from '../Component/Shopping/Shopping'
// 目前使用UseMock有问题
// import UseMock from '../Component/UseMock/UseMock'

// function App() {
//   return (
//     <div className="App">
//       {/* 生命周期使用 */}
//       {/* <LifeRound /> */}


//       {/* 父子组件传值 */}
//       {/* <Parent/> */}

//       {/* if else 和数组的map */}
//       {/* <IfElseMap/> */}

//       {/* 提价表单时使用 */}
//       {/* <FormSubmit/> */}

//       {/* 购物车案例 */}
//       {/* <Shopping /> */}

//       {/* 测试使用mock模拟假的接口 */}
//       {/* <UseMock/> */}

//       {this.props.children}
//     </div>
//   );
// }

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        {/* 生命周期使用 */}
        {/* <LifeRound /> */}


        {/* 父子组件传值 */}
        {/* <Parent/> */}

        {/* if else 和数组的map */}
        {/* <IfElseMap/> */}

        {/* 提价表单时使用 */}
        {/* <FormSubmit/> */}

        {/* 购物车案例 */}
        {/* <Shopping /> */}

        {/* 测试使用mock模拟假的接口 */}
        {/* <UseMock/> */}

        {this.props.children}
      </div>
    )
  }
}


export default App;
