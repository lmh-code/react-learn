import React from 'react';
import './App.css';
// import LifeRound from '../Component/LifeRound'
import Parent from '../Component/Parent'
function App() {
  return (
    <div className="App">
      {/* 生命周期使用 */}
      {/* <LifeRound /> */}

      {/* 父子组件传值 */}
      <Parent/>
    </div>
  );
}

export default App;
