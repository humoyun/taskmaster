import React, { useState } from "react";
import { Button, Card, Row, Col } from "antd";
import Avatar from "@/components/avatar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  margin: 0 auto;
`;

const CollapsedProfile = styled.div`
  width: 50px;
  height: 180px;
  background: linear-gradient(rgba(85, 193, 251, 0.46), rgb(255, 255, 255));
  display: flex;
  justify-content: center;

  .ant-avatar {
    margin: 0 auto;
    margin-top: 25px;
  }
`;

// background: `linear-gradient(rgba(85, 193, 251, 0.46), rgb(255, 255, 255))`;

export default function ProfileCard(props) {
  const [loading, setLoading] = useState(false);

  return (
    <Card
      style={{
        width: 250,
        background: "#06227d",
        borderRadius: 0
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
              borderGap={3}
              borderColor="#06227d"
              src="https://gitlab.com/uploads/-/system/user/avatar/2268258/avatar.png?width=200"
            />
          </Wrapper>
        </Col>
        <Col span={24}>
          <h3 style={{ color: "#fff" }}>Humoyun Ahmad</h3>
          <div style={{ color: "#fff" }}>
            <Button type="link" style={{ padding: 0, color: "#fff" }}>
              @humoyun
            </Button>
            | Seoul, S. Korea
          </div>
        </Col>
        <Col span={24}></Col>
      </Row>
    </Card>
  );
}
