import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu, Icon, Button, Card, Avatar, Row, Col } from "antd";
import styled from "styled-components";

import myCookie from "@/common/myCookie";
import "./style.less";

import Home from "@/icons/home.svg";
import Projects from "@/icons/rocket.svg";
import Group from "@/icons/group.svg";
import Activity from "@/icons/hourglass.svg";
import MarketIcon from "@/icons/app.svg";
import User from "@/icons/user.svg";
import CloudStorage from "@/icons/cloud-storage.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #63c9ff;
  border-radius: 50%;
`;

export default function MainSidebar({ collapsed }) {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const initMenuItem = location.pathname.substr(1);

  useEffect(() => {
    myCookie.get("main_menu_active");

    return () => {
      console.log("cleanup after main-sidebar mounted");
    };
  }, []);

  let taskMaster = collapsed ? "TM" : "TASK MASTER";
  console.log(">> collapsed: ", collapsed);

  const handleMenuClick = ({ key }) => {
    history.push(key);
    console.log(key);
  };

  return (
    <div className="main-sidebar">
      <Card
        style={{
          width: 250,
          borderRight: "1px solid #e8e8e8",
          background: `linear-gradient(rgba(85, 193, 251, 0.46), rgb(255, 255, 255))`
        }}
        bodyStyle={{ padding: "25px 15px" }}
        loading={loading}
        bordered={false}
      >
        <Row style={{ textAlign: "center" }}>
          <Col span={24}>
            <Wrapper>
              <Avatar
                size={62}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </Wrapper>
          </Col>
          <Col span={24}>
            <h3>John Anderson</h3>
            <div style={{ color: "#98a6ad" }}>
              <Button type="link" style={{ padding: 0 }}>
                @humoyun
              </Button>{" "}
              | Seoul, S. Korea
            </div>
          </Col>
          <Col span={24}></Col>
        </Row>
        {/* <Meta
          avatar={

          }
          title="@humoyun_ahmad"
          description="Seoul, South Korea"
        /> */}
      </Card>

      <Menu
        defaultSelectedKeys={[initMenuItem]}
        mode="inline"
        onClick={handleMenuClick}
        style={{ backgroundColor: "#fcfcfc" }}
      >
        <Menu.Item key="/">
          <Icon component={Home} style={{ fontSize: "20px", color: "#333" }} />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="projects">
          <Icon
            component={Projects}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Projects</span>
        </Menu.Item>
        <Menu.Item key="teams">
          <Icon component={Group} style={{ fontSize: "20px", color: "#333" }} />
          <span>Teams</span>
        </Menu.Item>
        <Menu.Item key="activities">
          <Icon
            component={Activity}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Activities</span>
        </Menu.Item>
        <Menu.Item key="marketplace">
          <Icon
            component={MarketIcon}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Marketplace</span>
        </Menu.Item>
        <Menu.Item key="storage">
          <Icon
            component={CloudStorage}
            style={{ fontSize: "20px", color: "#333" }}
          />
          <span>Storage</span>
        </Menu.Item>
        <Menu.Item key="profile">
          <Icon component={User} style={{ fontSize: "20px", color: "#333" }} />
          <span>Profile</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}
