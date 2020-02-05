import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { Layout } from 'antd';
import ContentHeader from './views/header';
import MainSidebar from './views/sidebar/MainSidebar';
import Login from './views/auth/login';

const { Header, Sider, Content } = Layout;


const App = ({ title }) => {
  const [collapsed, setCollapsed] = useState(false);
  

  let siderWidth = "250";
  const handleCollapse = (collapsed, type) => {
    console.log('onCollapse: ', collapsed, type);
  }

  const handleBreakpoint = (broken) => {
    console.log('Breakpoint: ', broken);
    setCollapsed(broken);
    console.log('===> ', collapsed);
  }

  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact component={Login} />

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
              <MainSidebar collapsed={collapsed}></MainSidebar>
            </Sider>

            <Layout>
              <Header>
                <ContentHeader></ContentHeader>
              </Header>
              <Content className="main-content">Content</Content>
            </Layout>

          </Layout>
          </div>
      </Router>
    </Provider>
  )
}
  
export default App;