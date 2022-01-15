import {Button, Card, Table, Tooltip} from "antd";
import {DeleteOutlined, SearchOutlined} from '@ant-design/icons';
//错误图片
import errorImg from "@/assets/error.png"

//行数据
const dataSource = [
    {
        comment_count: 0,
        cover: {type: 0, images: []},
        id: '8218',
        like_count: 0,
        pubdate: '2019-03-11 09:00:00',
        read_count: 0,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案',
    },
    {
        comment_count: 0,
        cover: {type: 1, images: ['http://geek.itheima.net/resources/images/9.jpg']},
        id: '8217',
        like_count: 0,
        pubdate: '2019-03-11 09:00:00',
        read_count: 0,
        status: 2,
        title: '深入理解Java虚拟机06--虚拟机字节码执行引擎',
    },
]


//头部列数据
const columns = [
    {
        title: '封面',
        dataIndex: 'cover',
        key: "cover",
        render(cover: { images: string[]; type: 0 | 1 | 3 }) {
            if (cover.type === 0) {
                return <img style={{width: 200}} src={errorImg} alt="图片错误"></img>
            } else {
                return <img style={{width: 200}} src={cover.images[0]}></img>
            }
        }
    },
    {
        title: '标题',
        dataIndex: 'title',
    },
    {
        title: '状态',
        dataIndex: 'status',
    }, {
        title: '发布时间',
        dataIndex: 'pubdate',
    }, {
        title: '阅读数',
        dataIndex: 'read_count',
    }, {
        title: '评论数',
        dataIndex: 'comment_count',
    }, {
        title: '点赞数',
        dataIndex: 'like_count',
    }, {
        title: '操作',
        key: 'action',
        render() {
            return (
                <div>
                    <Tooltip title="编辑">
                        <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                    </Tooltip>
                    <Tooltip title="删除">
                        <Button style={{marginLeft: 15}} type="primary" danger shape="circle" icon={<DeleteOutlined/>}/>
                    </Tooltip>
                </div>
            )
        }
    },
];

function ManagementTable() {
    return <div>
        <Card title="根据筛选条件共查询5029条数据" bordered={false} style={{width: 300}}></Card>
        {/*需要加上rowkey，给每一个元素加上标识*/}
        <Table rowKey="id" dataSource={dataSource} columns={columns}/>
    </div>
}

export default ManagementTable

