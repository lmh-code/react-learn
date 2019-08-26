import * as type from './type';
import dispatcher from './dispatcher';

const actions = {
  increment () {
    // 创建动作
    let actions = {
      type: type.INCRMENT
    }
    // dispatcher来通过dispatch  发送actions
    dispatcher.dispatch( actions )
  }
}

export default actions