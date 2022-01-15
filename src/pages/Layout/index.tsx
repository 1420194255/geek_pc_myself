import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import Home from "@/pages/Home"
import {Link, Route, useHistory, useLocation} from "react-router-dom";
import {Layout, Menu, message, Popconfirm} from 'antd';
import React, {useEffect, useState} from "react"
import style from "./index.module.scss"
import img_src from "@/assets/logo.png"
import {DiffOutlined, EditOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {Exit, user} from "@/store/actions/user";
import {RootState} from "@/store";

const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

// {/*气泡确认框*/}
const text = '您确定要退出吗?';


export default function Login() {
    const [state, setState] = useState({collapsed: false})
    const history = useHistory()
    const localtion = useLocation().pathname
    const dispatch = useDispatch()//仓库函数调用
    //用户信息
    // const [info, setinfo] = useState<Userinfo>({} as Userinfo)
    const info = useSelector((state: RootState) => state.user)
    useEffect(() => {
        dispatch(user())
    }, [])

    function confirm() {
        message.info('已退出');
        //清除数据
        dispatch(Exit())
        history.push("/login")
    }

    return <div className={style.Layout}>
        <Layout>
            {/*侧边栏*/}
            <Sider>
                <img src={img_src} alt="显示不全" className="imgInfo"/>
                <div style={{width: 256}} className="Menu">
                    <Menu
                        selectedKeys={[localtion]}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="/home" icon={<HomeOutlined/>}>数据概述
                            <Link to="/home">
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/home/article" icon={<DiffOutlined/>}>
                            <Link to="/home/article">
                                内容管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/home/publish" icon={<EditOutlined/>}>
                            <Link to="/home/publish">
                                发布文章
                            </Link>
                        </Menu.Item>

                    </Menu>
                </div>
            </Sider>
            <Layout>
                <Header className="Top">
                    <div className="userinfo">
                        <span>
                            <img className="Imginfo" src={info.photo} alt="用户图片"></img>
                        </span>
                        <span className="Text_content">{info.name}</span>
                        <span>
                            {/*气泡确认框*/}
                            <Popconfirm
                                placement="bottomRight"
                                title={text}
                                onConfirm={confirm}
                                okText="退出"
                                cancelText="取消">
                                <LogoutOutlined/>退出 </Popconfirm>
                        </span>
                    </div>
                </Header>
                <Content>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/home/article" component={Article}></Route>
                    <Route path="/home/publish" component={Publish}></Route>
                </Content>
                {/*<Footer>底部</Footer>*/}
            </Layout>
        </Layout>
    </div>
}