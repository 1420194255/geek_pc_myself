import {getToken} from "@/utils"
// 函数 +初始化状态
// action 先写成any
const initialState = getToken()
const login = (state = initialState, action: any) => {
    switch (action.type) {
        case "login/login":
            return action.token
        default:
            return state
    }
}

export default login
