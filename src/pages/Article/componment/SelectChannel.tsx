import {Select} from "antd";
import style from "./SelectChannel.module.scss"
import {useEffect, useState} from "react";
import {channels, GetArticleChannels} from "@/api";

const {Option} = Select;

function SelectChannel() {
    //保存频道信息
    //[ ] as 字符串数组
    const [Channels, setChannels] = useState([] as GetArticleChannels[])
    //获取频道信息
    useEffect(() => {
            async function GetChannels() {
                const res = await channels()
                setChannels(res.data.channels)
            }

            GetChannels()
        }, []
    )

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <div className={style.SelectChannel}>
            <Select defaultValue="请选择文章频道" style={{width: 120, color: "gray"}} onChange={handleChange}>
                {/*    res内的数据是单个数据，类型判断不需要数组    */}
                {Channels.map((res: GetArticleChannels) => {
                    return <Option value={res.id} key={res.id}>{res.name}</Option>
                })}
            </Select>
        </div>
    )
}

export default SelectChannel