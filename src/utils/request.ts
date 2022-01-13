import axios from "axios"

const instance = axios.create({
    baseURL: "https://autumnfish.cn/api/"
})

instance.interceptors.request.use(function (res) {
    console.log(res)
    return res
}, function (err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function (res) {
    console.log(res)
    return res
}, function (err) {
    return Promise.reject(err)
})

export {instance}