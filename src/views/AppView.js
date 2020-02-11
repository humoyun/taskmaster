import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ContentHeader from "./header";
import MainSidebar from "./sidebar/MainSidebar";

import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import "./AppView.less";
const { Header, Sider, Content } = Layout;

const Home = props => {
  const [collapsed, setCollapsed] = useState(false);

  let siderWidth = "250";
  const handleCollapse = (collapsed, type) => {
    console.log("onCollapse: ", collapsed, type);
  };

  const handleBreakpoint = broken => {
    console.log("Breakpoint: ", broken);
    setCollapsed(broken);
  };

  return (
    <div className="home-page">
      <Layout className="main-layout">
        <Sider
          collapsible={true}
          theme="light"
          width={siderWidth}
          trigger={null}
          collapsedWidth="50"
          onCollapse={handleCollapse}
          onBreakpoint={handleBreakpoint}
          breakpoint="sm"
        >
          <MainSidebar collapsed={collapsed}></MainSidebar>
        </Sider>

        <Layout>
          <Header>
            <ContentHeader></ContentHeader>
          </Header>

          <Content className="main-content-wrapper">
            {props.children}

            {/* <Container /> */}
            {/* https://www.youtube.com/watch?v=xn68rjtsBSk */}
            {/* https://codedaily.io/tutorials/48/Use-matchPath-to-Match-Nested-Route-Paths-in-Parent-Routes-with-React-Router */}
            {/* <Route
              path="/profile/:profileId"
              render={props => {
                return <Profile {...props} loading={this.state.loading} />;
              }}
            /> */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
