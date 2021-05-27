import React from 'react';
import { Table } from 'antd';
import { DollarOutlined, CreditCardOutlined, WalletOutlined, GiftOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Sales',
    dataIndex: 'label',
    key: 'label',
    fixed: 'left',
    width: 170,
    render: label => (
      <>
        {label.map(tag => {
          let icon = tag;
          if (tag === 'Cash') {
            icon = <DollarOutlined className="fs-15 icon" />;
          }
          if (tag === 'Card') {
            icon = <CreditCardOutlined className="fs-15 icon" />;
          }
          if (tag === 'Wallet') {
            icon = <WalletOutlined className="fs-15 icon" />;
          }
          if (tag === 'Other') {
            icon = <GiftOutlined className="fs-15 icon" />;
          }
          if (tag === 'Total Collected') {
            icon = '';
          }
          return (
            <div key={tag}>
              {icon} <span>{tag}</span>
            </div>
          );
        })}
      </>
    ),
  },
  { title: '5/1', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/2', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/3', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/4', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/5', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/6', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/7', dataIndex: 'dayfilterData', key: '1', width: 150, align: 'right' },
  { title: '5/8', dataIndex: 'dayfilterData', key: '8', width: 150, align: 'right' },
  { title: '5/9', dataIndex: 'dayfilterData', key: '9', width: 150, align: 'right' },
  { title: '5/10', dataIndex: 'dayfilterData', key: '10', width: 150, align: 'right' },
  { title: '5/11', dataIndex: 'dayfilterData', key: '11', width: 150, align: 'right' },
  { title: '5/12', dataIndex: 'dayfilterData', key: '12', width: 150, align: 'right' },
  { title: '5/13', dataIndex: 'dayfilterData', key: '13', width: 150, align: 'right' },
  { title: '5/14', dataIndex: 'dayfilterData', key: '14', width: 150, align: 'right' },
  { title: '5/15', dataIndex: 'dayfilterData', key: '15', width: 150, align: 'right' },
  { title: '5/16', dataIndex: 'dayfilterData', key: '16', width: 150, align: 'right' },
  { title: '5/17', dataIndex: 'dayfilterData', key: '17', width: 150, align: 'right' },
  { title: '5/18', dataIndex: 'dayfilterData', key: '18', width: 150, align: 'right' },
  { title: '5/19', dataIndex: 'dayfilterData', key: '19', width: 150, align: 'right' },
  { title: '5/20', dataIndex: 'dayfilterData', key: '20', width: 150, align: 'right' },
  { title: '5/21', dataIndex: 'dayfilterData', key: '21', width: 150, align: 'right' },
  { title: '5/22', dataIndex: 'dayfilterData', key: '22', width: 150, align: 'right' },
  { title: '5/23', dataIndex: 'dayfilterData', key: '23', width: 150, align: 'right' },
  { title: '5/24', dataIndex: 'dayfilterData', key: '24', width: 150, align: 'right' },
  { title: '5/25', dataIndex: 'dayfilterData', key: '25', width: 150, align: 'right' },
  { title: '5/26', dataIndex: 'dayfilterData', key: '26', width: 150, align: 'right' },
  { title: '5/27', dataIndex: 'dayfilterData', key: '27', width: 150, align: 'right' },
  { title: '5/28', dataIndex: 'dayfilterData', key: '28', width: 150, align: 'right' },
  { title: '5/29', dataIndex: 'dayfilterData', key: '29', width: 150, align: 'right' },
  { title: '5/30', dataIndex: 'dayfilterData', key: '30', width: 150, align: 'right' },
  /*{
    title: 'Amount',
    dataIndex: 'amount',
    key: '2',
    align: 'right' 
  },*/
];
const data = [
  {
    key: 'totalcollected',
    label: ['Total Collected'],
    dayfilterData: '$0.00',
  },
  {
    key: 'cash',
    label: ['Cash'],
    dayfilterData: '$0.00'
  },
  {
    key: 'card',
    label: ['Card'],
    dayfilterData: '$0.00'
  },
  {
    key: 'wallet',
    label: ['Wallet'],
    dayfilterData: '$0.00'
  },
  {
    key: 'other',
    label: ['Other'],
    dayfilterData: '$0.00'
  }
];

const Paymentcollected = () => {
  return (
    <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} pagination={false} className="paymentcollectedTable" />
  )
}
export default Paymentcollected;