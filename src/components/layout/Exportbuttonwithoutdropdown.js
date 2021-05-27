import React from 'react';
import { Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Exportbuttonwithoutdropdown = () => {
  return (
    <>
      <Button type="primary" icon={<DownloadOutlined />}>Export</Button>     
    </>
  );
}
export default Exportbuttonwithoutdropdown;