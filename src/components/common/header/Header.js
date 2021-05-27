import React from 'react';
import {
  Link
} from "react-router-dom";
import { Menu, Avatar, Dropdown, Row, Col } from 'antd';
import {
  AppstoreOutlined, LogoutOutlined, SettingOutlined, UnlockOutlined
} from '@ant-design/icons';
import Avtar from '../../../assets/images/avtar.jpg'
import './header.less'

const menu = (
  <Menu className="avtarDropdown">
    <Row className="avtarTop">
      <Col flex="none"><Avatar src={Avtar} shape="square" size={45} /></Col>
      <Col flex="auto" className="pLR10">
        <h4 className="mb-0">Hello, Partner Section</h4>
        <p className="mb-0" style={{ opacity: .9 }}>partner@spacepointe.com</p>
      </Col>
    </Row>
    <Row justify="center" align="top" className="avtarBottom" >
      <Col span={12} align="center">
        <Link to="/">
          <span className="icon"><AppstoreOutlined /></span>
          <span className="title">My Profile</span>
        </Link>
      </Col>
      <Col span={12} align="center">
        <Link to="/">
          <span className="icon"><SettingOutlined /></span>
          <span className="title">Settings</span>
        </Link>
      </Col>
      <Col span={12} align="center">
        <Link to="/">
          <span className="icon"><UnlockOutlined /></span>
          <span className="title">Change Password</span>
        </Link>
      </Col>
      <Col span={12} align="center">
        <Link to="/">
          <span className="icon"><LogoutOutlined /></span>
          <span className="title">Logout</span>
        </Link>
      </Col>
    </Row>
  </Menu>
);
const Headerlayout = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']} size={300} arrow >
      <Link to="" className="ant-dropdown-link float-right m-10" onClick={e => e.preventDefault()}>
        <Avatar src={Avtar} shape="circle" size={40} className="float-right" />
      </Link>
    </Dropdown>
  );
}
export default Headerlayout;
