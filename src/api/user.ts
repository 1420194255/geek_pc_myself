import {axios} from "@/utils/index"
import {AxiosPromise} from "axios";

function login(mobile: string, code: string) {
    return axios({
        url: "/authorizations",
        method: "post",
        data: {
            mobile,
            code
        }
    })
}

export type UserInfo = {
    birthday: string
    gender: number
    id: string
    mobile: string
    name: string
    photo: string
}

function GetUserInfo(): AxiosPromise<UserInfo> {
    return axios({
        url: "/user/profile",
        method: "get"
    })
}

export {login, GetUserInfo}