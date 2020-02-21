import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import './MainSidebar.less';
import {useHistory, useLocation} from 'react-router-dom'

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
          defaultSelectedKeys={['1']} 
          mode="inline" 
          onClick={handleMenuClick} 
          style={{ backgroundColor: '#fcfcfc' }}>
          {/* <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item> */}
          <Menu.Item key="projects">
            <Icon type="project" />
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key="teams">
            <Icon type="team" />
            <span>Teams</span>
          </Menu.Item>
          <Menu.Item key="activities">
            <Icon type="cluster" />
            <span>Activities</span>
          </Menu.Item>
          <Menu.Item key="marketplace">
            <Icon type="appstore" />
            <span>Marketplace</span>
          </Menu.Item>      
          <Menu.Item key="storage">
            <Icon type="cloud-upload" />
            <span>Storage</span>
          </Menu.Item>
        </Menu>
      </div>
  )
}
