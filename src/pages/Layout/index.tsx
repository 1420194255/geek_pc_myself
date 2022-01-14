import Article from "@/pages/Article"
import Publish from "@/pages/Publish"
import Home from "@/pages/Home"
import {Route} from "react-router-dom";

function Login() {
    return (
        <div>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/home/article" component={Article}></Route>
            <Route path="/home/publish" component={Publish}></Route>
        </div>
    )
}

export default Login