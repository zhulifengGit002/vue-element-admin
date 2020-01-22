import axios from 'axios'
import qs from 'qs'
import {Message, Loading} from 'element-ui'
axios.defaults.timeout = 100000

const locBaseUrl = 'http://192.168.1.127:5002'
const sevBaseUrl = 'http://47.104.215.238:5002'
axios.defaults.baseURL = locBaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器(暂时不需要)
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断vuex中是否存在token
//     // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = store.state.token
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    Loading.service().close()
    if (response.status === 200) {
      Message.success('数据请求成功')
      return Promise.resolve(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    let status = error.response.status
    console.log(status)
    Loading.service().close()
    if (status) {
      // 可以通过状态码进行判断
      Message.error('请求失败')
      return Promise.reject(error.response)
    }
  }
)

// 封装get请求也称作query
function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

// 封装post请求
function post (url, params) {
  return new Promise((resolve, reject) => {
    // qs.stringify(params)
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}

// 封装文件上传请求
function filePost (url, params) {
  return new Promise((resolve, reject) => {
    axios.defaults.headers.post['Content-Type'] = false
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}
// 抛出函数,对外接口

export default function request (method, url, params) {
  Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
    fullscreen: true
  })
  if (method === 'get') {
    return get(url, params)
  } else if (method === 'post') {
    return post(url, params)
  } else if (method === 'filePost') {
    return filePost(url, params)
  }
}
