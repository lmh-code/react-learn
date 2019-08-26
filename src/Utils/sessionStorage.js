/*
 * @Descripttion: sessionStorage 通用方法
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-22 16:37:49
 * @LastEditTime: 2019-08-23 14:13:30
 */
import utils from './utils'
let sessionStorage = window.sessionStorage;

/**
 * @description: 在sessionStorage中存数据
 * @param {type} _key:要存储的key值， _val:要存储的value值
 */
const set = (_key, _val) => {
  if (_key && !utils.isJson(_key)) {
    sessionStorage.setItem(_key, JSON.stringify(_val))
  } else if (_key && utils.isJson(_key) && !_val) {
    for (let objKey in _key) {
      this.set(objKey, _key[objKey])
    }
  }
}

/**
 * @description: 从sessionStorage中获取数据
 * @param {type} _key：获取数据的key值
 * @return: 返回获取到的数据
 */
const get = (_key) => {
  if(!_key) {
    return ''
  }
  return utils.formatData(sessionStorage.getItem(_key))
}

/**
 * @description: 清空sessionStorage中缓存的所有数据
 */
const clear = () => {
  sessionStorage.clear()
}

/**
 * @description: 清空sessionStorage中缓存的指定的数据
 * @param {type} _key： 要清楚的数据的key值
 */
const remove = (_key) => {
  sessionStorage.removeItem(_key)
}

export default {
  set,
  get,
  clear,
  remove
}
