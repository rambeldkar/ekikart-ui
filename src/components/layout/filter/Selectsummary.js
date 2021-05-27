import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}
const Selectsummary = (props) => {
    return (
        <Select defaultValue={props.selectvalue}
            style={{ width: 110 }}
            onChange={selectOnChange}
        >
            <Option value="Summary">Summary</Option>
            <Option value="Monthly">Monthly</Option>
            <Option value="Weekly">Weekly</Option>
            <Option value="Daily">Daily</Option>

        </Select>
    );
}
export default Selectsummary;