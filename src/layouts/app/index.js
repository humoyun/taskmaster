import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import styled from "styled-components";
import { darken, lighten } from "polished";
import { Menu, Icon } from "antd";

// import Home from '@/icons/home.svg'
import User from "@/icons/user.svg";
import AppIcon from "@/icons/app.svg";
import Calendar from "@/icons/calendar.svg";
import Layers from "@/icons/layers.svg";
import Analytics from "@/icons/analytics.svg";
import Members from "@/icons/tie.svg";
import "./style.less";

const UpperWrapper = styled.div`
  width: 30px;
  height: 50px;
  margin: 10px auto;

  h2:hover {
    cursor: pointer;
  }
`;

const UserProfile = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 40px;
  height: 100px;
`;

const menuItemInlineStyle = { fontSize: "22px", color: "#333" };
const itemList = [
  {
    key: "backlog",
    name: "Backlog",
    icon: AppIcon,
    style: menuItemInlineStyle
  },
  {
    key: "sprints",
    name: "Sprints",
    icon: Layers,
    style: menuItemInlineStyle
  },
  {
    key: "members",
    name: "Members",
    icon: Members,
    style: menuItemInlineStyle
  },
  {
    key: "calendar",
    name: "Calendar",
    icon: Calendar,
    style: menuItemInlineStyle
  },
  {
    key: "analytics",
    name: "Analytics",
    icon: Analytics,
    style: menuItemInlineStyle
  }
];

const App = props => {
  const history = useHistory();
  const location = useLocation();
  const [curMenuItem, setCurMenuItem] = useState(location.pathname.substr(1));
  // myCookie.get("main_menu_active");

  useEffect(() => {
    const currPath = location.pathname.substr(1);
    setCurMenuItem(currPath);

    return () => {};
  }, [location.pathname]);

  const handleMenuClick = async ({ key }) => {
    let target;

    const lastIndex = location.pathname.lastIndexOf("/");
    target = `${location.pathname.substr(0, lastIndex)}/${key}`;

    history.push(target);
  };

  const menuItemList = itemList.map(item => (
    <Menu.Item key={item.key}>
      <Icon component={item.icon} style={item.style} />
      <span>{item.name}</span>
    </Menu.Item>
  ));

  return (
    <div className="app-layout">
      <aside className="app-layout-sidebar">
        <UpperWrapper>
          <h2 onClick={() => history.push("/")}>TM</h2>
        </UpperWrapper>

        <Menu
          mode="inline"
          inlineCollapsed={true}
          selectedKeys={[curMenuItem]}
          onClick={e => handleMenuClick(e)}
        >
          {menuItemList}
        </Menu>

        <UserProfile>
          <Icon
            component={User}
            style={{ fontSize: "40px", color: "#333", marginTop: "40px" }}
          />
        </UserProfile>
      </aside>

      <div className="app-layout-main">
        <div className="main-header">Header</div>
        <section className="main-content">{props.children}</section>
      </div>
    </div>
  );
};

export default App;
