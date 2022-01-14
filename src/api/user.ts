import {axios} from "@/utils/index"

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

export {login}