import {Userinfo} from "@/store/actions";

//规定格式类型为 Userinfo
const initialState = {} as Userinfo
const user = (state: Userinfo = initialState, action: any) => {
    switch (action.type) {
        case "user/info":
            return action.info
        default:
            return state
    }
}

export default user
