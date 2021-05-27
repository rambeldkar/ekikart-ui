import React from 'react';
import {
  NavLink
} from "react-router-dom";
import { Menu } from 'antd';
import {
  QrcodeOutlined, UserOutlined, DashboardOutlined, ShoppingCartOutlined, CreditCardOutlined, NotificationOutlined, ShopOutlined, TeamOutlined, PictureOutlined, GiftOutlined, FieldTimeOutlined
} from '@ant-design/icons';
import Logo from '../../../assets/images/Logo/logo-white.png'
import Logosmall from '../../../assets/images/Logo/ekikart-logo-small.png'
import './sidebar.less'

const { SubMenu } = Menu;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
const Sidebarlayout = () => {
  const [openKeys, setOpenKeys] = React.useState(['sub1']);
  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="logo" type="flex" align="middle">
        <img className="logoBig" src={Logo} width={140} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }} alt="Logo" />
        <img className="logoSmall" src={Logosmall} width={40} style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }} alt="Logo" />
      </div>
      <Menu theme="dark" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}>
        <SubMenu key="sub1" icon={<DashboardOutlined />} title="Dashboard">
          <Menu.Item key="1"><NavLink activeClassName="active" to="/">Sales Summary </NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink activeClassName="active" to="/itemsales">Item Sales</NavLink></Menu.Item>
        </SubMenu>
        <Menu.Item key="4" icon={<ShopOutlined />} title="Merchant Management">Merchant Management</Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />} title="Broker Management">Broker Management</Menu.Item>
        <Menu.Item key="6" icon={<ShoppingCartOutlined />} title="Order Management">Order Management</Menu.Item>
        <Menu.Item key="7" icon={<GiftOutlined />} title="Product Management">Product Management</Menu.Item>
        <Menu.Item key="8" icon={<GiftOutlined />} title="Catalog Management">Catalog Management</Menu.Item>
        <Menu.Item key="9" icon={<GiftOutlined />} title="Grocery Management">Grocery  Management</Menu.Item>
        <Menu.Item key="10" icon={<TeamOutlined />} title="Employee Management">Employee Management</Menu.Item>
        <Menu.Item key="11" icon={<QrcodeOutlined />} title="Kardstash Store QR">Kardstash Store QR</Menu.Item>
        <SubMenu key="sub2" icon={<PictureOutlined />} title="Advert Management">
          <Menu.Item key="13">Listing</Menu.Item>
          <Menu.Item key="14">Pending List</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<CreditCardOutlined />} title="Finance Management">
          <Menu.Item key="16">Receivables </Menu.Item>
          <Menu.Item key="17">Payables   </Menu.Item>
        </SubMenu>
        <Menu.Item key="18" icon={<FieldTimeOutlined />} title="Activity Log">Activity Log</Menu.Item>
        <Menu.Item key="19" icon={<NotificationOutlined />} title="Ads">Ads</Menu.Item>
      </Menu>
    </>
  );
}

export default Sidebarlayout;
