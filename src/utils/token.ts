// key
const TOKEN_KEY = "User_token"
// 获取token
const getToken = () => localStorage.getItem(TOKEN_KEY)
// 保存token 传入字符串
const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
// 清空token
const clearToken = () => localStorage.removeItem(TOKEN_KEY)
// !! 获取这个值对应的 布尔值
// 比如 !![]==>true
// !!{}==>true
const isAuth = () => !!getToken()

export {isAuth, getToken, setToken, clearToken}