import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './style.less';
import {useHistory, useLocation} from 'react-router-dom'
import Projects from "@/icons/rocket.svg";
import Group from "@/icons/group.svg";
import Activity from "@/icons/hourglass.svg";
import MarketIcon from "@/icons/app.svg";
import User from "@/icons/user.svg";
import CloudStorage from "@/icons/cloud-storage.svg";

export default function MainSidebar({ collapsed }) {

  let history = useHistory();
  let location = useLocation();

  let taskMaster = collapsed ? 'TM' : 'TASK MASTER';
  console.log('>> collapsed: ', collapsed);

  const handleMenuClick = ({ key }) => {
    history.push(key);
    console.log(key)
  }

  return (
    <div className="main-sidebar">
      <div className="task-master-logo">{taskMaster}</div>   

      <Menu 
        defaultSelectedKeys={['projects']} 
        mode="inline" 
        onClick={handleMenuClick} 
        style={{ backgroundColor: '#fcfcfc' }}>
        {/* <Menu.Item key="dashboard">
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Menu.Item> */}
        <Menu.Item key="projects">
          <Icon component={Projects} style={{ fontSize: "20px", color: "#333" }} />
          <span>Projects</span>
        </Menu.Item>
        <Menu.Item key="teams">
          <Icon component={Group} style={{ fontSize: "20px", color: "#333" }} />
          <span>Teams</span>
        </Menu.Item>
        <Menu.Item key="activities">
        <Icon component={Activity} style={{ fontSize: "20px", color: "#333" }} />
          <span>Activities</span>
        </Menu.Item>
        <Menu.Item key="marketplace">
          <Icon component={MarketIcon} style={{ fontSize: "20px", color: "#333" }}/>
          <span>Marketplace</span>
        </Menu.Item>      
        <Menu.Item key="storage">
          <Icon component={CloudStorage} style={{ fontSize: "20px", color: "#333" }}/>
          <span>Storage</span>
        </Menu.Item>
        <Menu.Item key="profile">
          <Icon component={User} style={{ fontSize: "20px", color: "#333" }}/>
          <span>Profile</span>
        </Menu.Item>
      </Menu>
    </div>
  )
}
