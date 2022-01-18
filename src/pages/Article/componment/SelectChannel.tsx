import {Select} from "antd";
import style from "./SelectChannel.module.scss"
import {useEffect, useState} from "react";
import {channels, GetArticleChannels} from "@/api";

const {Option} = Select;

function SelectChannel(props: any) {
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

    //频道切换
    function handleChange(value: any) {
        console.log(`selected ${value}`);

    }


    return (
        //根据文档-拿到Form组件-props传递的值
        <div className={style.SelectChannel}>
            <Select defaultValue={props.value} style={{width: 120, color: "gray"}} onChange={props.onChange}>
                {/*    res内的数据是单个数据，类型判断不需要数组    */}
                {Channels.map((res: GetArticleChannels) => {
                    return <Option value={res.id} key={res.id}>{res.name}</Option>
                })}
            </Select>
        </div>
    )
}

export default SelectChannel