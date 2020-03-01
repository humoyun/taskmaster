import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Icon, Avatar } from "antd";

import styled from "styled-components";
import "./style.less";

import { logout } from "@/store/actions/auth";
import myCookie from "@/common/myCookie";

import ProfileCard from "./ProfileCard";

// menu item icons
import Home from "@/icons/home.svg";
import Projects from "@/icons/rocket.svg";
import Group from "@/icons/group.svg";
import Activity from "@/icons/hourglass.svg";
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
  { key: "/", name: "Home", icon: Home, style: menuItemInlineStyle },
  {
    key: "projects",
    name: "Projects",
    icon: Projects,
    style: menuItemInlineStyle
  },
  { key: "teams", name: "Teams", icon: Group, style: menuItemInlineStyle },
  {
    key: "activities",
    name: "Activities",
    icon: Activity,
    style: menuItemInlineStyle
  },
  {
    key: "marketplace",
    name: "Marketplace",
    icon: MarketIcon,
    style: menuItemInlineStyle
  },
  {
    key: "storage",
    name: "Cloud Storage",
    icon: CloudStorage,
    style: menuItemInlineStyle
  },
  {
    key: "profile",
    name: "Profile",
    icon: User,
    style: menuItemInlineStyle
  }
];

const MainSidebar = ({ collapsed, logout, user }) => {
  const history = useHistory();
  const location = useLocation();
  const initMenuItem = location.pathname.substr(1);

  useEffect(() => {
    myCookie.get("main_menu_active");

    return () => {
      console.log("cleanup after main-sidebar mounted");
    };
  }, []);

  const handleMenuClick = async ({ key }) => {
    if (key === "logout") {
      await logout();
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
        <ProfileCard></ProfileCard>
      ) : (
        <CollapsedProfile>
          <Avatar size={40} src="https://i.pravatar.cc/100?img=59" />
        </CollapsedProfile>
      )}

      <Menu
        defaultSelectedKeys={[initMenuItem]}
        mode="inline"
        onClick={handleMenuClick}
        style={{ backgroundColor: "#fcfcfc" }}
      >
        {menuItemList}

        <Menu.Item key="logout" style={{ marginTop: "320px" }}>
          <Icon
            component={Logout}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user
  };
};

const mapActionsToProps = { logout };

export default connect(mapStateToProps, mapActionsToProps)(MainSidebar);
