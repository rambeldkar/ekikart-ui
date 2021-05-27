import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}
const Itemsrank = (props) => {
    return (
        <Select defaultValue={props.selectvalue}
            style={{ width: 120 }}
            onChange={selectOnChange}
        >
            <Option value="top5items">Top 5 Items</Option>
            <Option value="allitems">All Items</Option>

        </Select>
    );
}
export default Itemsrank;