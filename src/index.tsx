import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "antd/dist/antd.css"
import {Provider} from "react-redux"
import store from "@/store";
//日期组件中文配置
import 'moment/locale/zh-cn';
import {ConfigProvider} from "antd";
import locale from 'antd/lib/locale/zh_CN';

ReactDOM.render(
    //日期组件中文配置
    <Provider store={store}>
        <ConfigProvider locale={locale}>
            <App/>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
)
