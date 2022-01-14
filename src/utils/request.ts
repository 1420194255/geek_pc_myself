import axios from "axios"
import {message} from "antd";

const instance = axios.create({
    baseURL: "http://geek.itheima.net/v1_0"
})

instance.interceptors.request.use(function (res) {
    // console.log(res)
    return res
}, function (err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function (res) {
    return res.data
}, function (err) {
    message.error(err.response.data.message)
    return Promise.reject(err)
})

export {instance}