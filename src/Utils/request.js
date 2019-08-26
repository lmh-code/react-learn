import axios from "axios";
import config from './config';
import localStorage from './localStorage'

// 设置超时时间
axios.defaults.timeout = 60000;
// 允许跨域配置
axios.defaults.withCredentials = true;

/**
 * @description: 动态设置请求头
 * @param {type} 区分是 postRequestBody 还是 postRequestParams
 * @param {_oParam} 其他参数，用于控制一些非正常现象  urlType： 1：登录接口   其它：正常接口
 * @return: 
 */
const setHeaders = (_type, _oParam) => {
  let loginInfo = localStorage.get('loginInfo') || {}
  let headers = {}
  headers['device_type'] = 'web'
  headers['version'] = '1.0.0'
  if(_type === 'body') {
    headers['Content-Type'] = 'application/json;charset=UTF-8'
  }else {
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  if(_oParam && _oParam.urlType && _oParam.urlType === 1) {
    headers['Authorization'] = 'Basic d2ViOmQ4YmZjMzQwMWE3NTg5ZTc4NGIwNmJkZmdhMmFkMWM0ZQ=='
  }else {
    headers['Authorization'] = `${loginInfo.token_type} ${loginInfo.access_token}`
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
 * @param {_url} 请求地址
 * @param {_params} 请求参数
 * @param {_oParam} 其他参数，用于控制一些非正常现象  urlType： 1：登录接口   其它：正常接口
 * @return: 
 */
const post = (_url, _params, _oParam) => {
  let baseUrl = config.reqUrl
  return axios({
    method: "post",
    url: `${baseUrl}${_url}`,
    data: formatParams(_params),
    headers: setHeaders('body', _oParam)
  });
};

/**
 * @description: @RequsetParam请求
 * @param {_url} 请求地址
 * @param {_params} 请求参数
 * @param {_oParam} 其他参数，用于控制一些非正常现象  urlType： 1：登录接口   其它：正常接口
 * @return: 
 */
const postP = (_url, _params={}, _oParam) => {
  let baseUrl = config.reqUrl
  return axios({
    method: "post",
    url: `${baseUrl}${_url}`,
    data: formatParams(_params),
    transformRequest: [
      function(data) {
        console.log("data:", data)
        let ret = "";
        for (let it in data) {
          ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      }
    ],
    headers: setHeaders('params', _oParam)
  });
};

/**
 * @description: get请求
 * @param {type} 
 * @return: 
 */
const get = (_url, _params={}, _oParam) => {
  let baseUrl = config.reqUrl
  let reqUrl = `${baseUrl}${_url}`
  return axios.get(reqUrl, {
    params: formatParams(_params),
    headers: setHeaders('params', _oParam)
  })
};

export default {
  get,
  post,
  postP
}
