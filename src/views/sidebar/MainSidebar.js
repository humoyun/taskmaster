import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './MainSidebar.less';

const sidebarList = [
  { title: '', icon: '' }
];

export default function MainSidebar({ collapsed, somevar }) {

  let taskMaster = collapsed ? 'TM' : 'TASK MASTER';
  console.log('>> collapsed: ', collapsed);
  console.log('>> somevar: ', somevar);
  const handleMenuClick = ({ key }) => {
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
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="project" />
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="team" />
            <span>Teams</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="cluster" />
            <span>Activities</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="appstore" />
            <span>Marketplace</span>
          </Menu.Item>      
          <Menu.Item key="6">
            <Icon type="cloud-upload" />
            <span>Storage</span>
          </Menu.Item>
        </Menu>
      </div>
  )
}
