import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import Home from "@/pages/Home"
import {Link, Route, useLocation} from "react-router-dom";
import {Layout, Menu} from 'antd';
import React, {useState} from "react"
import style from "./index.module.scss"
import img_src from "@/assets/logo.png"
import {DiffOutlined, EditOutlined, HomeOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

export default function Login() {
    const [state, setState] = useState({collapsed: false})
    //使用location，拿到路由
    const localtion = useLocation().pathname

    const toggleCollapsed = () => {
        console.log(state)
    };
    return <div className={style.Layout}>
        <Layout>
            <Sider>
                <img src={img_src} alt="显示不全" className="imgInfo"/>
                <div style={{width: 256}} className="Menu">
                    {/*
                    defaultSelectedKeys={[localtion]}
                    使用uselocation拿到当前路由，将路由作为key，
                    效果：当前页面刷新，不会跳转到第一个页面
                    */}
                    <Menu
                        defaultSelectedKeys={[localtion]}
                        defaultOpenKeys={[localtion]}
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

                <Header>顶部</Header>
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