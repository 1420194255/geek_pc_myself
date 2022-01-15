import {Breadcrumb, Card} from "antd";
import style from "./index.module.scss"
import {Link} from "react-router-dom"
import ScreeningForm from "@/pages/Article/componment/ScreeningForm";

export default function Article() {
    return <div className={style.Article}>
        <div className="site-card-border-less-wrapper">
            <Card title={
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/home">首页</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/home/article">内容管理</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            } bordered={false} style={{width: 300}}>
                <ScreeningForm></ScreeningForm>
            </Card>
        </div>
    </div>
}