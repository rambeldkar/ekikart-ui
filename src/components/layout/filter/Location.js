import React from 'react';
import { Select } from 'antd';
import { ShopOutlined } from '@ant-design/icons';
const { Option } = Select;

const selectOnChange = (value) => {
    console.log(`selected ${value}`);
}

const Location = () => {

    return (
        <Select mode="multiple" placeholder="Select Location" allowClear showSearch showArrow="true" className="locationSelect" dropdownClassName="locationDropdown"
            style={{ width: 200 }}
            optionFilterProp="children"
            onChange={selectOnChange} maxTagCount={1}
        >
            <Option value="Store 1"><ShopOutlined /> Store 1</Option>
            <Option value="Store 2"><ShopOutlined /> Store 2</Option>
            <Option value="Store 3"><ShopOutlined /> Store 3</Option>
            <Option value="Store 4"><ShopOutlined /> Store 4</Option>
            <Option value="Store 5"><ShopOutlined /> Store 5</Option>
            <Option value="Store 6"><ShopOutlined /> Store 6</Option>
            <Option value="Store 7"><ShopOutlined /> Store 7</Option>
            <Option value="Store 8"><ShopOutlined /> Store 8</Option>
        </Select>
    );
}
export default Location;