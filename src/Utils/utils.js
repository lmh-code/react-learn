/*
 * @Descripttion: 通用js工具模块
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-22 16:49:55
 * @LastEditTime: 2019-08-22 17:16:14
 */

/**
 * @description: 判断传入值是否是对象
 * @param {type} _obj 对象
 * @return: true or false
 */ 
const isJson = (_obj) => {
  return typeof _obj === 'object' && Object.prototype.toString.call(_obj) === '[object Object]' && !_obj.length
}

/**
 * @description: 处理数据 主要是将storage中拿到的数据处理一下
 * @param {type} _value：要处理的数据
 * @return: 返回处理之后的数据
 */
const formatData = (_value) => {
  if(typeof _value !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(_value)
  } catch (e) {
    return _value || undefined
  }
}


export default {
  isJson,
  formatData
}