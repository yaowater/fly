import axios from 'axios'
import { Toast } from 'vant'



// let baseURL = 'http://localhost:8080'


const instance = axios.create({
    baseURL: baseURL, // 服务器地址
    timeout: 20000,
    headers: {}
})

// 请求拦截器：在请求被发送出去之前，做一些验证工作
instance.interceptors.request.use(function (config) {
    config.headers.token = sessionStorage.getItem('token') || ''
    return config
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截器：在响应到达之前，先进行数据过滤，错误处理
instance.interceptors.response.use(function (response) {
    // console.log("response",response);
    if (response.status === 200) {
        if (response.data.result == "401") {
            Toast("登录信息过期，请重新登录");
            let Url = "http://localhost:8080/login";
            // let Url = "http://shop.bdxhtx.com/login";
            window.location.href = Url;
        }
        return response.data
    }
}, function (error) {
    Toast("网络异常，请求稍后再试")
    return Promise.reject(error)
})

export default instance