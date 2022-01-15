import {Select} from "antd";
import style from "./SelectChannel.module.scss"
const {Option} = Select;

function SelectChannel() {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <div className={style.SelectChannel}>
            <Select defaultValue="请选择文章频道" style={{width: 120,color:"gray"}} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
            </Select>
        </div>
    )
}

export default SelectChannel