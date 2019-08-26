/*
 * @Descripttion: 观察者（订阅者），被观察者（发布者）模式
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-14 11:08:18
 * @LastEditTime: 2019-08-26 17:50:13
 */

let eventProxy = {
  // 订阅者发布者模式  第三种方式
  eventObj: {},
  // 发布者
  $on(eventStr, cb) {
    if(!this.eventObj[eventStr]) {
      this.eventObj[eventStr] = []
    }
    this.eventObj[eventStr].push(cb)
  },
  // 订阅者
  // ... reset模式   可接收多个参数  参数类型随意
  $emitManyParam(eventStr, ..._params) {
    if(!this.eventObj[eventStr]) {
      return
    }
    this.eventObj[eventStr].forEach((func) => {
      // ... 解构
      func(..._params)
    })
  },
  // 订阅者
  // 只接收一个参数  参数类型为对象
  $emitOneParam(eventStr, _params) {
    if(!this.eventObj[eventStr]) {
      return
    }
    this.eventObj[eventStr].forEach((func) => {
      func(_params)
    })
  },
  // 销毁函数
  $destroy(eventStr) {
    delete this.eventObj[eventStr]
  }
}
export default eventProxy;


// 测试使用
// eventProxy.$on('up', (_params) => {
//   let allParams = _params
//   console.log("allParams:", allParams)
// })
// eventProxy.$emitOneParam('up', {
//   personVos: [
//       {
//         name: '呼呼',
//         age: 11
//       },
//       {
//         name: '哈哈',
//         age: 12
//       }
//     ],
//     showLoading: true,
//     imgUrl: 'http://127...'
//   }
// )

// eventProxy.$on('down', (..._params) => {
//   let [a, b, c] = _params
//   console.log("a:", a)
//   console.log("b:", b)
//   console.log("c:", c)
// }) 
// eventProxy.$emitMayParam('down', {msg: '测试一下down', showLoading: true},
// 'huhu')