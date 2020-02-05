import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ContentHeader from "./header";
import MainSidebar from "./sidebar/MainSidebar";

import "./Home.less";
const { Header, Sider, Content } = Layout;

const Home = ({ title }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [somevar, setSomevar] = useState("somevar");

  let siderWidth = "250";
  const handleCollapse = (collapsed, type) => {
    console.log("onCollapse: ", collapsed, type);
  };

  const handleBreakpoint = broken => {
    console.log("Breakpoint: ", broken);
    setCollapsed(broken);
    console.log("===> ", collapsed);
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
          <MainSidebar somevar={somevar} collapsed={collapsed}></MainSidebar>
        </Sider>

        <Layout>
          <Header>
            <ContentHeader></ContentHeader>
          </Header>
          <Content className="main-content">Content</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
