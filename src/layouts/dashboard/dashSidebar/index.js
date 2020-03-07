import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Icon, Avatar } from "antd";

import styled from "styled-components";
import "./style.less";
import { logout } from "@/store/actions/auth";
import ProfileCard from "../components/ProfileCard";

// menu item icons
import Home from "@/icons/home.svg";
import Projects from "@/icons/rocket.svg";
import Group from "@/icons/users.svg";
// import Activity from "@/icons/hourglass.svg";
import MarketIcon from "@/icons/app.svg";
import User from "@/icons/user.svg";
import CloudStorage from "@/icons/cloud-storage.svg";
import Logout from "@/icons/logout.svg";

const CollapsedProfile = styled.div`
  width: 50px;
  height: 180px;
  background: linear-gradient(rgba(85, 193, 251, 0.46), rgb(255, 255, 255));
  display: flex;
  justify-content: center;

  .ant-avatar {
    margin: 0 auto;
    margin-top: 25px;
  }
`;

const menuItemInlineStyle = { fontSize: "20px", color: "#333" };
const itemList = [
  { key: "home", name: "Home", icon: Home, style: menuItemInlineStyle },
  {
    key: "projects",
    name: "Projects",
    icon: Projects,
    style: menuItemInlineStyle
  },
  {
    key: "profile",
    name: "Profile",
    icon: User,
    style: menuItemInlineStyle
  },
  { key: "teams", name: "Teams", icon: Group, style: menuItemInlineStyle },
  // {
  //   key: "activities",
  //   name: "Activities",
  //   icon: Activity,
  //   style: menuItemInlineStyle
  // },
  {
    key: "appmarket",
    name: "App Market",
    icon: MarketIcon,
    style: menuItemInlineStyle
  },
  {
    key: "storage",
    name: "Cloud Storage",
    icon: CloudStorage,
    style: menuItemInlineStyle
  }
];

const MainSidebar = ({ collapsed, logout, user }) => {
  const history = useHistory();
  const location = useLocation();
  const [curMenuItem, setCurMenuItem] = useState(
    location.pathname === "/" ? "home" : location.pathname.substr(1)
  );
  // myCookie.get("main_menu_active");

  useEffect(() => {
    const currPath =
      location.pathname === "/" ? "home" : location.pathname.substr(1);
    setCurMenuItem(currPath);

    return () => {};
  }, [location.pathname]);

  const handleMenuClick = async ({ key }) => {
    if (key === "logout") {
      await logout();
    } else if (key === "home") {
      history.push("/");
    } else {
      history.push(key);
    }
  };

  const menuItemList = itemList.map(item => (
    <Menu.Item key={item.key}>
      <Icon component={item.icon} style={item.style} />
      <span>{item.name}</span>
    </Menu.Item>
  ));

  return (
    <div className="main-sidebar">
      {!collapsed ? (
        <ProfileCard collapsed={collapsed}></ProfileCard>
      ) : (
        <CollapsedProfile>
          <Avatar size={40} src="https://i.pravatar.cc/100?img=59" />
        </CollapsedProfile>
      )}

      <Menu
        selectedKeys={[curMenuItem]}
        mode="inline"
        onClick={e => handleMenuClick(e)}
      >
        {menuItemList}

        <Menu.Item
          key="logout"
          style={{
            marginTop: "380px"
          }}
        >
          <Icon
            component={Logout}
            style={{
              fontSize: "20px",
              color: "#333"
            }}
          />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state, props) => ({ user: state.auth.user });
const mapActionsToProps = { logout };

export default connect(mapStateToProps, mapActionsToProps)(MainSidebar);
