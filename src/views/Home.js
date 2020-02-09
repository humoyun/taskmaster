import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import ContentHeader from "./header";
import MainSidebar from "./sidebar/MainSidebar";
import Dashboard from "../views/dashboard";
import Projects from "../views/projects";
import Project from "../views/projects/Project";
import Teams from "../views/teams";
import Team from "../views/teams/Team";
import Activities from "../views/activity";

import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import "./Home.less";
const { Header, Sider, Content } = Layout;

const Home = ({ match, title }) => {
  const [collapsed, setCollapsed] = useState(false);
  console.log("Home macth: ", match);
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
          <MainSidebar collapsed={collapsed}></MainSidebar>
        </Sider>

        <Layout>
          <Header>
            <ContentHeader></ContentHeader>
          </Header>

          <Content className="main-content">
            <Route path="/" component={Dashboard} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/projects/:projectId" component={Project} />
            <Route path="/teams" component={Teams} exact />
            <Route path="/teams/:teamId" component={Team} />
            <Route path="/activities" component={Activities} exact />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
