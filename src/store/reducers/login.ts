import {getToken} from "@/utils"
import {LoginType} from "@/store/actions";
// 函数 +初始化状态
// action 先写成any

const initialState = getToken()
const login = (state = initialState, action: LoginType) => {
    switch (action.type) {
        case "login/login":
            return action.token
        default:
            return state
    }
}

export default login
//根据dispatch对应的type返回不同的数据
