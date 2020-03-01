import React, { useState } from "react";
import { Button, Card, Avatar, Row, Col } from "antd";
import styled from "styled-components";

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

export default function ProfileCard(props) {
  const [loading, setLoading] = useState(false);

  return (
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
            <Avatar size={62} src="https://i.pravatar.cc/100?img=59" />
          </Wrapper>
        </Col>
        <Col span={24}>
          <h3>Humoyun Ahmad</h3>
          <div style={{ color: "#98a6ad" }}>
            <Button type="link" style={{ padding: 0 }}>
              @humoyun
            </Button>{" "}
            | Seoul, S. Korea
          </div>
        </Col>
        <Col span={24}></Col>
      </Row>
    </Card>
  );
}
