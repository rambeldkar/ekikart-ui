import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}
const Itemssummary = (props) => {
    return (
        <Select defaultValue={props.selectvalue}
            style={{ width: 120 }}
            onChange={selectOnChange}
        >
            <Option value="amount">Amount</Option>
            <Option value="quantity">Quantity</Option>

        </Select>
    );
}
export default Itemssummary;