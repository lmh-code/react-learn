import axios from "axios";
import {reqUrl} from './config';

// 设置超时时间
axios.defaults.timeout = 60000;
// 允许跨域配置
axios.defaults.withCredentials = true;

/**
 * @description: 动态设置请求头
 * @param {type} 
 * @return: 
 */
const setHeaders = (_type) => {
  let headers = {}
  headers['device_type'] = 'web'
  headers['version'] = '2.0.1'
  if(_type === 'body') {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
  }else {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return headers
}

/**
 * @description: 格式化请求参数
 * @param {type} _paramsObj 请求参数  可以是数组，可以是对象
 * @return: 返回的是处理后的请求参数
 */
const formatParams = (_paramsObj) => {
  let arrayBool = Object.prototype.toString.call(_paramsObj) === '[object Array]'
  if(arrayBool) {
    return _paramsObj 
  }else {
    let params = {}
    for (let key in _paramsObj) {
      let item = _paramsObj[key]
      if (key.indexOf('_options') > -1) {
        continue
      }
      if (typeof item !== 'undefined' && typeof item !== 'function' && item !== null) {
        params[key] = item
      }
    }
    return params 
  }
}

/**
 * @description: 请求拦截
 * @param {type} 
 * @return: 
 */
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

/**
 * @description: 返回拦截
 * @param {type} 
 * @return: 
 */
axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    if(err.response === undefined) {
      return {code: 500, msg: '未收到服务器响应', status: 504};
    }else if (err.response.status === 404) {
      return {code: 404, msg: "请求接口未找到", status: err.response.status};
    } else if (err.response.status === 401) {
      return {code: 401, msg: "登录信息失效", status: err.response.status};
    } else if (err.response.status === 500 || err.response.status === 504) {
      return {code: 500, msg: "服务器异常", status: err.response.status};
    }else {
      return Promise.reject({code: err.response.status, msg: err.response.error_description || err.response.statusText, status: err.response.status});
    }
  }
);


/**
 * @description: RequestBody请求
 * @param {type} _url: 请求地址
 * @param {type} _params：请求参数
 * @return: 
 */
const postB = (_url, _params) => {
  let baseUrl = reqUrl
  return axios({
    method: "post",
    url: `${baseUrl}${_url}`,
    data: formatParams(_params),
    headers: setHeaders('body')
  });
};

/**
 * @description: @RequsetParam请求
 * @param {type} _url: 请求地址
 * @param {type} _params：请求参数
 * @return: 
 */
const postP = (_url, _params) => {
  let baseUrl = reqUrl
  return axios({
    method: "post",
    url: `${baseUrl}${_url}`,
    data: formatParams(_params),
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: setHeaders('params')
  });
};

/**
 * @description: get请求
 * @param {type} 
 * @return: 
 */
const get = url => {
  let baseUrl = reqUrl
  return axios({
    method: "get",
    url: `${baseUrl}${url}`
  });
};

export default {
  get,
  postB,
  postP
}
