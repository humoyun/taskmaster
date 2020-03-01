import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Icon, Avatar } from "antd";

import styled from "styled-components";
import "./style.less";

import { logout } from "@/store/actions/auth";
import myCookie from "@/common/myCookie";

import ProfileCard from "./ProfileCard";

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

  let taskMaster = collapsed ? "TM" : "TASK MASTER";
  console.log(">> collapsed: ", collapsed);

  const handleMenuClick = async ({ key }) => {
    if (key === "logout") {
      await logout();
    } else {
      history.push(key);
      console.log(key);
    }
  };

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
        <Menu.Item key="/">
          <Icon component={Home} style={{ fontSize: "20px", color: "#333" }} />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="projects">
          <Icon
            component={Projects}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Projects</span>
        </Menu.Item>
        <Menu.Item key="teams">
          <Icon component={Group} style={{ fontSize: "20px", color: "#333" }} />
          <span>Teams</span>
        </Menu.Item>
        <Menu.Item key="activities">
          <Icon
            component={Activity}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Activities</span>
        </Menu.Item>
        <Menu.Item key="marketplace">
          <Icon
            component={MarketIcon}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Marketplace</span>
        </Menu.Item>
        <Menu.Item key="storage">
          <Icon
            component={CloudStorage}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Storage</span>
        </Menu.Item>
      </Menu>

      <Menu
        defaultSelectedKeys={[initMenuItem]}
        mode="inline"
        onClick={handleMenuClick}
        style={{ backgroundColor: "#fcfcfc" }}
      >
        <Menu.Item key="profile">
          <Icon component={User} style={{ fontSize: "20px", color: "#333" }} />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="logout">
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
