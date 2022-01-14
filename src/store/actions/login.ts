import {login} from "@/api"
import {setToken} from '@/utils'
import {RootThunkAction} from '.'
// 基础模板
export type LoginType = {
    type: 'login/login'
    token: string
}


function loginAction(mobile: string, code: string): RootThunkAction {
    //async是基于Promise的，返回的数据依旧是Promise对象，属于微任务
    return async (
        dispatch) => {
        const res = await login(mobile, code)
        setToken(res.data.token)
        //将数据保存到redux中
        dispatch({
            type: "login/login",
            token: res.data.token
        })
    }
}

export {loginAction}
