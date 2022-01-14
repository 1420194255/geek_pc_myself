import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import Home from "@/pages/Home"
import {Link, Route, useLocation} from "react-router-dom";
import {Layout, Menu} from 'antd';
import React, {useEffect, useState} from "react"
import style from "./index.module.scss"
import img_src from "@/assets/logo.png"
import {DiffOutlined, EditOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {user} from "@/store/actions/user";
import {RootState} from "@/store";

const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

export default function Login() {
    const [state, setState] = useState({collapsed: false})
    //使用location，拿到路由
    const localtion = useLocation().pathname
    const dispatch = useDispatch()//仓库函数调用
    //用户信息
    // const [info, setinfo] = useState<Userinfo>({} as Userinfo)
    const info = useSelector((state: RootState) => state.user)
    useEffect(() => {
        dispatch(user())
    }, [])


    return <div className={style.Layout}>
        <Layout>
            <Sider>
                <img src={img_src} alt="显示不全" className="imgInfo"/>
                <div style={{width: 256}} className="Menu">
                    <Menu
                        defaultSelectedKeys={[localtion]}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="/home" icon={<HomeOutlined/>}>首页
                            <Link to="/home">
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/home/publish" icon={<DiffOutlined/>}>
                            <Link to="/home/publish">
                                文章发布
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/home/article" icon={<EditOutlined/>}>
                            <Link to="/home/article">
                                编辑文章
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
                            <LogoutOutlined/>退出
                        </span>
                    </div>
                </Header>
                <Content>
                    <Route path="/home" exact component={Home}></Route>
                    <Route path="/home/article" component={Article}></Route>
                    <Route path="/home/publish" component={Publish}></Route>
                </Content>
                <Footer>底部</Footer>
            </Layout>
        </Layout>
    </div>
}