import {Button, Form, Radio} from "antd"
import {ArticleStatus} from "@/api/constants"
import SelectChannel from "@/pages/Article/componment/SelectChannel";
import DateCheck from "@/pages/Article/componment/DateCheck";
import ManagementTable from "@/pages/Article/componment/ManagementTable";
import {GetArticles} from "@/api";

function ScreeningForm() {
    const onFinish = async (values: any) => {
        console.log('Success:', values);
        //获取文章列表数据
        const res = await GetArticles({channel_id: 0, status: -1})
        console.log("GetArticles", res)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return <div>
        <Form
            labelCol={{span: 1}}
            wrapperCol={{span: 16}}
            initialValues={{status: -1, channel_id: 0}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item label="状态" name="status">
                <Radio.Group>
                    {ArticleStatus.map((v, i) => {
                        return (<Radio value={v.id} key={v.id}>{v.name}</Radio>)
                    })}
                </Radio.Group>
            </Form.Item>

            <Form.Item label="频道" name="channel_id">
                <SelectChannel></SelectChannel>
            </Form.Item>

            <Form.Item label="日期" name="date">
                <DateCheck></DateCheck>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 0, span: 16}}>
                <Button type="primary" htmlType="submit">
                    筛选
                </Button>
            </Form.Item>
        </Form>
        {/* 内容管理表格 */}
        <ManagementTable></ManagementTable>
    </div>
}

export default ScreeningForm