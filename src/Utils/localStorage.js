/*
 * @Descripttion: localStorage 通用方法
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-22 16:37:49
 * @LastEditTime: 2019-08-22 17:18:47
 */
import {isJson, formatData} from './utils'
let localStorage = window.localStorage;

/**
 * @description: 在localStorage中存数据
 * @param {type} _key:要存储的key值， _val:要存储的value值
 */
const setItem = (_key, _val) => {
  if (_key && !isJson(_key)) {
    localStorage.setItem(_key, JSON.stringify(_val))
  } else if (_key && isJson(_key) && !_val) {
    for (let objKey in _key) {
      this.set(objKey, _key[objKey])
    }
  }
}

/**
 * @description: 从localStorage中获取数据
 * @param {type} _key：获取数据的key值
 * @return: 返回获取到的数据
 */
const getItem = (_key) => {
  if(!_key) {
    return ''
  }
  return formatData(localStorage.getItem(_key))
}

/**
 * @description: 清空localStorage中缓存的所有数据
 */
const clear = () => {
  localStorage.clear()
}

/**
 * @description: 清空localStorage中缓存的指定的数据
 * @param {type} _key： 要清楚的数据的key值
 */
const removeItem = (_key) => {
  localStorage.removeItem(_key)
}

export default {
  setItem,
  getItem,
  clear,
  removeItem
}
