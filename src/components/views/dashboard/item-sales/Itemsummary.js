import React from "react";
import { Table,Avatar } from "antd";
const columns = [
    {
        icon: 'icon',
        dataIndex: 'icon',
        key: 'icon',
        fixed: "left",
        width: 1,
        padding:'8px 0 8px 10px!important',
        className: 'first-p-r-0',
        render: () => 
            <div>
                <Avatar className="bg-primary fw-700">P</Avatar> 
            </div> 
    },
    {
        title: 'Item name',
        dataIndex: 'name',
        key: 'name',
        fixed: "left",
        width: 270,
    },
    {
        title: 'UPC/PLU',
        dataIndex: 'skuupc',
        key: 'skuupc',
        align: "left",
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        align: "left",
    },
    {
        title: 'Units sold',
        dataIndex: 'unitsold',
        key: 'unitsold',
        align: "right",
    },
    {
        title: 'Sales amount',
        dataIndex: 'amount',
        key: 'amount',
        align: "right",
        className: 'fw-700'
    },
];
const dataSource = [
    {
        key: '1',
        name: 'Samsung Galaxy S20',
        skuupc: 123354353432,
        category: 'Mobile',
        unitsold: 12,
        amount: '$150'
    },
    {
        key: '2',
        name: 'OnePlus 8T (12GB)',
        skuupc: 223123422336,
        category: 'Mobile',
        unitsold: 4,
        amount: '$800'
    },
    {
        key: '3',
        name: 'Huawei P40 Pro',
        skuupc: 323123422337,
        category: 'Mobile',
        unitsold: 25,
        amount: '$750'
    },
    {
        key: '4',
        name: 'Xiaomi Mi 11 Ultra',
        skuupc: 423123422334,
        category: 'Mobile',
        unitsold: 12,
        amount: '$1250'
    },
    {
        key: '5',
        name: 'Asus ROG Phone 5',
        skuupc: 523123422334,
        category: 'Mobile',
        unitsold: 24,
        amount: '$190'
    },
];

const Itemsummarylist = () => {
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            //scroll={{ x: 1500 }}
            className="salessummaryTable"
        />
    );
};
export default Itemsummarylist;
