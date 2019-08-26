import * as type from './type';
import dispatcher from './dispatcher';

const actions = {
  increment () {
    console.log("测试看看是不是接收到action的信号了");
    // 创建动作
    let actions = {
      type: type.INCRMENT
    }
    // dispatcher来通过dispatch  发送actions
    dispatcher.dispatch( actions )
  }
}

export default actions