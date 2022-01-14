import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import Home from "@/pages/Home"
import {Link, Route} from "react-router-dom";
import {Layout, Menu} from 'antd';
import React, {useState} from "react"
import style from "./index.module.scss"
import img_src from "@/assets/logo.png"
import {DiffOutlined, EditOutlined, HomeOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Footer, Sider, Content} = Layout;

export default function Login() {
    const [state, setState] = useState({collapsed: false})
    const toggleCollapsed = () => {
        console.log(state)
    };
    return <div className={style.Layout}>
        <Layout>
            <Sider>
                <img src={img_src} alt="显示不全" className="imgInfo"/>
                <div style={{width: 256}} className="Menu">
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        {/*<Menu.Item key="1" icon={<HomeOutlined/>}>*/}
                        {/*    <Link to="/home">首页*/}
                        {/*    </Link>*/}
                        {/*</Menu.Item>*/}

                        <Menu.Item key="1" icon={<HomeOutlined/>}>首页
                            <Link to="/home">
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DiffOutlined/>}>
                            <Link to="/home/publish">
                                文章发布
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<EditOutlined/>}>
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