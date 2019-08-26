/*
 * @Descripttion: 通用js工具模块
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-22 16:49:55
 * @LastEditTime: 2019-08-23 17:25:10
 */

/**
 * isMobile 是否是移动端
 * @returns {boolean}
 */
const isMobile = () => {
  return !!navigator.userAgent.match(/(iPhone|iPod|Android|iOS|iPad|Mobile)/i)
}

 /**
 * isWeChat 是否是微信浏览器打开
 * @returns {boolean}
 */
const isWeChat = () => {
  return !!navigator.userAgent.match(/MicroMessenger/i)
}

/**
 * @description: 判断传入值是否是对象
 * @param {type} _obj 对象
 * @return: true or false
 */ 
const isJson = (_obj) => {
  return typeof _obj === 'object' && Object.prototype.toString.call(_obj) === '[object Object]' && !_obj.length
}

/**
 * @description: 将时间戳转换成制定格式的日期
 * @param {fmt} 要转化成的时间格式 yyyy/MM/dd HH:mm:ss 任意变化
 * @param {_timestamp} 时间戳 默认3位长度 10位长度会乘以1000
 * @return: 格式化之后的时间
 */
const dateFormat = (fmt, _timestamp) => {
  if(_timestamp.toString().length === 10) {
    _timestamp = _timestamp * 1000
  }
  let date = new Date(_timestamp)
  let ret;
  let opt = {
    "y+": date.getFullYear().toString(),
    "M+": (date.getMonth() + 1).toString(),
    "d+": date.getDate().toString(),
    "H+": date.getHours().toString(),
    "m+": date.getMinutes().toString(),
    "s+": date.getSeconds().toString()
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}

/**
 * @description: 处理数据 比如：将storage中拿到的数据处理一下
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

/**
 * @description: 检查对象中是否含有某一个key
 * @param {k} key 值
 * @param {array} 数组
 * @return: true or false
 */
const isKeyInArray = (k, array) => {
  let val = false
  for (let item of array) {
    if (val) {
      break
    }
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          val = true
          break
        }
      }
    }
  }
  return val
}

/**
 * @description: 通过某一个key移除对象数组中某一项
 * @param {k} 
 * @param {array} 
 * @return: 
 */
const removeItemByKey = (k, array) => {
  array.forEach((item, index) => {
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          array.splice(index, 1)
          break
        }
      }
    }
  })
}

/**
 * @description: 通过指定的key和value移除对象数组中某一项
 * @param {key} 指定对比的key 接收的是string
 * @param {val} 指定对比的key的值
 * @param {array} 数组
 * @return: 
 */
const removeItemByKeyVal = (key, val, array) => {
  let newArr = array.filter(item => {
    return val !== item[key]
  })
  return newArr
}

/**
 * @description: 数组对象求差集
 * @param {type} 
 * @return: 
 */
const getSubtract = (unionArr, subsetArr, keyStr) => {
  let newTmp = []
  for(let i = 0; i < unionArr.length; i++) {
    let flag = true
    for(let j = 0; j < subsetArr.length; j++) {
      if(unionArr[i][keyStr] === subsetArr[j][keyStr]) {
        flag = false
        break
      }
    }
    if(flag) {
      newTmp.push(unionArr[i])
    }
  }
  return newTmp
}

/**
 * @description: 通过key获取元素在数组中的位置
 * @param {type} 
 * @return: 
 */
const findIndexByKey = (k, array) => {
  let val = -1
  array.forEach((item, index) => {
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          val = index
          break
        }
      }
    }
  })
  return val
}

/**
 * @description: 获取url的最后一个path
 * @param {type} 
 * @return: 
 */
const getUrlPath = () => {
  const url = window.location.href
  let path = url.slice(url.lastIndexOf('/') + 1, url.indexOf('?') === -1 ? url.length : url.indexOf('?'))
  return path
}

/**
 * toUrlFormat json对象转为key=value&key=value
 * @param obj
 * @returns {string}
 */
const toUrlFormat = (obj) => {
  let str = ''
  for (let key of Object.keys(obj)) {
    str += obj[key] && `${key}=${obj[key]}&`
  }
  str = str.substr(0, str.length - 1)
  return str
}

/**
 * toPrice 金钱保留两位小数
 * @param num
 * @returns {string}
 */
const toPrice = (num) => {
  if(num) {
    return parseFloat(num).toFixed(2)
  }else {
    return '0.00'
  }
}

/**
 * @description: arrSort 一个元素是对象数组，根据对象中的一个属性排序(制定key的值越小越靠前), 结合compareKey 使用
 * @param {_key} 排序依据的key
 * @param {_arr} 要排序的数据
 * @return: 
 */
const compareKey = (_key) => {
  return function(obj1, obj2) {
    var val1 = obj1[_key];
    var val2 = obj2[_key];
    if(val1 < val2) {
      return -1;
    }else if(val1 > val2) {
      return 1;
    }else{
      return 0;
    }
  }
}
const arrSort = (_key, _arr) => {
  return _arr.sort(compareKey(_key))
}

/**
 * [moveArrItem 移动数组位置]
 * @param  {[type]} arr    [数组]
 * @param  {[type]} index1 [当前位置]
 * @param  {[type]} index2 [要移动的位置]
 * @return {[type]}        [description]
 */
const moveArrItem = (arr, index1, index2) => {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}

/**
 * [changeStrToMinutes 将时分秒转换为分钟数]
 * @param  {[type]} _str [标准的时分秒格式 HH:mm:ss 或者 HH:mm]
 * @return {[type]}      [description]
 */
const hmsToMinutes = (_str) => {
  let minutesArr = _str.split(":")
  if(minutesArr[2]) {
    // HH:mm:ss
    return parseInt(minutesArr[0]) * 60 * 60 + parseInt(minutesArr[1]) * 60 + parseInt(minutesArr[2])
  }else if(minutesArr[1]) {
    // HH:mm
    return parseInt(minutesArr[0]) * 60 * 60 + parseInt(minutesArr[1]) * 60
  }else {
    // HH
    return parseInt(minutesArr[0]) * 60 * 60
  }
}

/**
 * [compareDate 判断时间是否有冲突]
 * @param  {[type]} _startTime [开始时间数组 存的是转换为分钟的数据]
 * @param  {[type]} _endTime   [结束时间数组]
 * @return {[type]}            [description]
 */
const compareDate = (_startTime, _endTime) => {
  let startTime = _startTime.sort()
  let endTime = _endTime.sort()
  for(let i = 1; i < startTime.length; i++) {
    if(startTime[i] <= endTime[i - 1]) {
      return false
    }
  }
  return true
}


export default {
  isMobile,
  isWeChat,
  isJson,
  formatData,
  dateFormat,
  isKeyInArray,
  removeItemByKey,
  removeItemByKeyVal,
  getSubtract,
  findIndexByKey,
  getUrlPath,
  toUrlFormat,
  toPrice,
  arrSort,
  moveArrItem,
  hmsToMinutes,
  compareDate
}