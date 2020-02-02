import React from 'react';
import './App.less';
import { Layout } from 'antd';
import TmHeader from './views/header';

const { Header, Sider, Content } = Layout;
let siderWidth = "250"

const App = ({ title }) => {

  const handleCollapse = (collapsed, type) => {
    console.log('onCollapse: ', collapsed, type);
  }

  const handleBreakpoint = (broken) => {
    console.log('Breakpoint: ', broken);
  }

  const handleTrigger = (broken) => {
    console.log('Breakpoint: ', broken);
  }


  return (
    <div className="container">
      <Layout className="main-layout">
        <Sider 
          collapsible={true} 
          theme="light" 
          width={siderWidth} 
          trigger={null}
          collapsedWidth="50"
          onCollapse={handleCollapse}
          onBreakpoint={handleBreakpoint}
          breakpoint="sm">
          Sider
        </Sider>

        <Layout>
          <Header>
            <TmHeader></TmHeader>
          </Header>
          <Content className="main-content">Content</Content>
        </Layout>

      </Layout>
    </div>
  )
}
  
export default App;