import React from 'react';
// import Login from "../src/pages/Login"
import Login from "@/pages/Login"
import Layout from "@/pages/Layout"


import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    {/*<Redirect from="/"  to="/login" exact></Redirect>*/}
                    {/*
                    和路由重定向Redirect的区别
                    Route render可以在这里写路由导航守卫
                    */}
                    <Route exact path="/" render={
                        () => {
                            console.log("跳转了")
                            return <Redirect to="/login"/>
                        }
                    }>
                    </Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Layout}></Route>
                </Switch>
            </Router>
        </div>
    );



};
