import {Button, Form, Radio} from "antd"
import {ArticleStatus} from "@/api/constants"
import SelectChannel from "@/pages/Article/componment/SelectChannel";
import DateCheck from "@/pages/Article/componment/DateCheck";
import ManagementTable from "@/pages/Article/componment/ManagementTable";

function ScreeningForm() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div>
        <Form
            labelCol={{span: 1}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item label="状态">
                <Radio.Group>
                    {ArticleStatus.map((v, i) => {
                        return (<Radio value={1} key={v.id}>{v.name}</Radio>)
                    })}
                </Radio.Group>
            </Form.Item>

            <Form.Item label="频道">
                <SelectChannel></SelectChannel>
            </Form.Item>

            <Form.Item label="日期">
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