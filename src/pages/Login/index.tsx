import {Card, Form, Button, Input, Checkbox} from 'antd'
import logo from '../../assets/logo.png'
import './index.scss'


//別名 匹配类型,Form表單验证成功，返回的是字符串
type FormDate = { remember: boolean, mobile: string, code: string }

const Login = () => {
    const onFinish = (values: FormDate) => {
        console.log('Success:', values);
        // console.log(values.mobile)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt=''/>
                {/* 登录表单 */}
                <Form
                    name="basic"
                    wrapperCol={{span: 24}}
                    labelCol={{span: 8}}
                    initialValues={{remember: true, mobile: "13711111111", code: "246810"}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    validateTrigger={["onChange", "onBlur"]}
                    autoComplete="off"
                >
                    <Form.Item
                        name="mobile"
                        rules={[{
                            required: true,
                            message: '手机号码不能为空'
                        }, {
                            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
                            message: "手机号码格式不正确哦"
                        }]}
                    >
                        <Input size={"large"}/>
                    </Form.Item>

                    <Form.Item
                        name="code"
                        rules={[{required: true, message: '验证码不能为空!'}, {pattern: /^\d{6}$/, message: "验证码格式不正确哦"}]}
                    >
                        <Input size={"large"}/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{span: 24}}>
                        <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{span: 24}}>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
