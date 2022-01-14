import {Userinfo} from "@/store/actions/login";
import {RootThunkAction} from "@/store/actions/index";
import {GetUserInfo} from "@/api";
import {clearToken} from "@/utils";

export type UserType = {
    type: 'user/info'
    info: Userinfo
}


function user(): RootThunkAction {
    return async (dispatch) => {
        const res = await GetUserInfo()//发送请求
        //调用user/info，保存信息
        dispatch({
            type: "user/info",
            info: res.data
        })
    }
}

function Exit(): RootThunkAction {
    return async (dispatch) => {
        dispatch({
            type: "user/info",
            info: {} as Userinfo
        })
        clearToken()
    }
}

export {user, Exit}
