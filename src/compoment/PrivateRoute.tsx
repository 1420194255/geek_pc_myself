import {Redirect, Route, RouteProps} from "react-router-dom"
import {isAuth} from "@/utils";
import {message} from "antd";
import {useEffect} from "react";

function PrivateRoute({children, ...rest}: RouteProps) {
    let auth = isAuth()
    // console.log("children", children)//本组件内的子组件
    // console.log("rest", rest)//本组件属性

    useEffect(() => {
        if (!isAuth()) {
            message.error("请先登录")
        }
    })
    return (
        <Route
            {...rest}
            render={({location}) => {
                if (isAuth()) {
                    return children
                } else {
                    message.error("请先登录")
                    return (
                        < Redirect
                            to={
                                {
                                    pathname: "/login",
                                    //state是什么？
                                    //是location，目标路由的信息，类似与导航守卫的to
                                    state: {
                                        from: location
                                    }
                                }
                            }
                        />
                    )
                }
            }
            }
        />
    );
}

export default PrivateRoute