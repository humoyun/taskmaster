import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { Menu, Icon } from 'antd';
import { useHistory } from 'react-router-dom';

// import Home from '@/icons/home.svg'
import User from '@/icons/user.svg'
import AppIcon from '@/icons/app.svg'

import Calendar from '@/icons/calendar.svg'
import Layers from "@/icons/layers.svg";
import Analytics from "@/icons/analytics.svg";
import Members from "@/icons/tie.svg";
import './style.less';


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

const App = props => {
  const history = useHistory()
  const handleMenuClick = (e) => {

  } 

  const goHome = () => {
    history.push('/');
  }

  return (
    <div className="app-layout">
      <aside className="app-layout-sidebar">
        <UpperWrapper>
          <h2 onClick={goHome}>TM</h2>
        </UpperWrapper>

        <Menu 
          defaultSelectedKeys={['1']} 
          mode="inline" 
          onClick={handleMenuClick}
          inlineCollapsed={true}>
          <Menu.Item key="1">
            <Icon component={AppIcon} style={{ fontSize: "22px", color: "#333" }} />
            <span>Backlog</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon component={Layers} style={{ fontSize: "22px", color: "#333" }} />
            <span>Sprints</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon component={Members} style={{ fontSize: "22px", color: "#333" }} />
            <span>Members</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon component={Calendar} style={{ fontSize: "22px", color: "#333" }} />
            <span>Calendar</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon component={Analytics} style={{ fontSize: "22px", color: "#333" }} />
            <span>Analytics</span>
          </Menu.Item>
        </Menu>  

        <UserProfile>
          <Icon component={User} style={{ fontSize: "40px", color: "#333", marginTop: '40px' }} />
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
