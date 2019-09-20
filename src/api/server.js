import axios from 'axios';
import qs from 'qs';

const TIMEOUT = 30000; // 设置超时时间

export default class Server {
  /**
   *
   *
   * @param {*} method
   * @param {*} url
   * @param {*} params
   * @memberof Server
   */
  axios(method, url, params){
    return new Promise((resolve,reject) =>{
      if(typeof params !== 'object') params = {};
      const _option = {
        method,
        url,
        baseURL:'http://localhost:3002',
        timeout: TIMEOUT,
        params: null,
        data: null,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // 默认
          // 'Content-Type': 'application/json'
        },
        withCredentials: true, //是否携带cookies发起请求
        validateStatus:(status)=>{
            return status >= 200 && status < 300;
        },
        ...params,
      }
      // 判断请求方式，根据请求方式不同进行编码
      const needBosy = /^(put|post|patch)$/i.test(method);
      const sendJSON = _option.headers && _option.headers['Content-Type'] === 'application/json';
      if(needBosy){ // 如果参数在请求体中
        _option.data = sendJSON ? JSON.stringify(params):qs.stringify(params)
      }else {
        _option.params = params
      }
      axios.request(_option).then(res=>{
        resolve(typeof res.data === 'object' ? res.data : JSON.parse(res.data))
      },error=>{
        if(error.response){
          reject(error.response.data)
        }else {
          reject(error)
        }
      })
    })
  }
}
