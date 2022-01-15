import {axios} from "@/utils";
import {AxiosPromise} from "axios";

export type GetArticleChannels = {
    id: number
    name: string
}
//res.chnels 数据为字符串数组，
type ChannelRes = { channels: GetArticleChannels[] }

function channels(): AxiosPromise<ChannelRes> {
    return axios({
        url: "/channels"
    })
}

export {channels}