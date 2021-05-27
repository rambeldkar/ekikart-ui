import React from 'react';
import { Popover, Button, Row, Col, Space } from 'antd';
import Paymenttype from '../layout/filter/Paymenttype.js'
import { DownloadOutlined, FileExcelOutlined } from '@ant-design/icons';

const Exportform = () => {
  return (
    <>
      <Space  style={{width: '100%'}} direction="vertical" className="mb-1">
        <Paymenttype/>
      </Space>
      <Row gutter={12}>
        <Col lg={24} xs={24} align="right" >
          <Button type="default" className="btn-mr8">Cancel</Button>
          <Button type="primary" icon={<FileExcelOutlined />}>Download</Button>
        </Col>
      </Row>
    </>
  )
}

const Exportbutton = () => {
  return (
    <>
      <Popover content={Exportform} title="Export" trigger="click" placement="bottomRight" >
        <Button type="primary" icon={<DownloadOutlined />}>Export</Button>
      </Popover>
    </>
  );
}
export default Exportbutton;