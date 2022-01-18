import {axios} from "@/utils";
import {AxiosPromise} from "axios";

export type GetArticleChannels = {
    id: number
    name: string
}
//res.chnels 数据为字符串数组，
type ChannelRes = { channels: GetArticleChannels[] }

//获取频道信息
function channels(): AxiosPromise<ChannelRes> {
    return axios({
        url: "/channels"
    })
}

type Articles = {
    status?: number
    channel_id?: number
    begin_pubdate?: number
    end_pubdate?: number
    page?: number
    per_page?: number
}


//获取文章列表信息
function GetArticles(data: any): AxiosPromise<ChannelRes> {
    return axios({
        url: "/articles",
        data: data
    })
}

export {channels, GetArticles}