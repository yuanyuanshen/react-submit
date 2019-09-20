import axios from 'axios';

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
          // 'Content-Type': 'application/x-www-form-urlencoded'
          // 'Content-Type': 'application/json'
        },
        withCredentials: true, //是否携带cookies发起请求
        validateStatus:(status)=>{
            return status >= 200 && status < 300;
        },
        ...params,
      }
      // 判断请求方式
      if(method === 'get'){
        _option.params = params
      }else {
        _option.data = params
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