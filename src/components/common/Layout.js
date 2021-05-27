import React from "react";
import MediaQuery from "react-responsive";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Layout as Layouts, Switch } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebarlayout from "./sidebar/Sidebar";
import Headerlayout from "./header/index";
import Footerlayout from "./footer/index";

const Layout = (props) => {
  const { Header, Sider } = Layouts;
  const [isDarkMode, setIsDarkMode] = React.useState();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const { switcher, themes } = useThemeSwitcher();
  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };
  return (
    <>
      <div className="ekiakrtApp" id="ekikartLayout">
        <Layouts style={{ minHeight: "100vh" }}>
          <MediaQuery minDeviceWidth={992}>
            <Sider
              trigger={null}
              collapsible
              collapsed={isCollapsed}
              width={230}
              className="ekikartSidebar"
            >
              <Sidebarlayout />
            </Sider>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={991}>
            <Sider
              trigger={null}
              collapsible
              collapsed={!isCollapsed}
              width={230}
              className="ekikartSidebar"
            >
              <Sidebarlayout />
            </Sider>
          </MediaQuery>
          <Layouts className="site-layout">
            <Header className="bg-white p-0">
              {React.createElement(
                isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setIsCollapsed(!isCollapsed),
                }
              )}
              <Switch checked={isDarkMode} onChange={toggleTheme} />
              <Headerlayout {...props} />
            </Header>
            <>{props.children}</>
            <Footerlayout />
          </Layouts>
        </Layouts>
      </div>
    </>
  );
};

export default Layout;
