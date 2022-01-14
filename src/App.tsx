import React from 'react';
// import Login from "../src/pages/Login"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Login from "@/pages/Login"
import PrivateRoute from "./compoment/PrivateRoute";
import Layout from "@/pages/Layout";


export default function App() {
    return (<div>
        <Router>
            <Switch>
                {/*<Redirect from="/"  to="/login" exact></Redirect>*/}
                {/*
                    和路由重定向Redirect的区别
                    Route render可以在这里写路由导航守卫
                    render是一个回调函数
                    当检测到path的时候 调用
                    */}
                <Route exact path="/" render={() => {
                    return <Redirect to="/login"/>
                }}>
                </Route>

                {/*判断是不是有token，没有返回登录页面*/}
                {/*<Route path="/home" render={() => {*/}
                {/*    if (isAuth()) {*/}
                {/*        return <Layout/>*/}
                {/*    } else {*/}
                {/*        return <Redirect to="/login"/>*/}
                {/*    }*/}
                {/*}}></Route>*/}
                <Route path="/login" component={Login}></Route>
                {/*
                PrivateRoute
                */}
                {/*
                exact 精准匹配，只要匹配到home就不显示后面的页面
                */}
                <PrivateRoute path="/home">
                    <Layout/>
                </PrivateRoute>
            </Switch>
        </Router>
    </div>);


};
