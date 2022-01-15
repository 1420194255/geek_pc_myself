import {DatePicker, Space} from 'antd';

const {RangePicker} = DatePicker;

function DateCheck() {
    return (
        <div>
            <Space direction="vertical" size={12}>
                <RangePicker/>
            </Space>
        </div>
    )
}

export default DateCheck