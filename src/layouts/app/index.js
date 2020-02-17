import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";

const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #ccc;
`;

const Content = styled.div`
  width: 200px;
  height: 100vh;
  background-color: yellow;
`;

const AppLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppLayout = props => {
  return (
    <AppLayoutWrapper className="">
      <Sidebar className="app-sidebar"></Sidebar>
      <Content className="app-main-content">{props.children}</Content>
    </AppLayoutWrapper>
  );
};

export default AppLayout;
