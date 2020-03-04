import React, { useState, useEffect } from "react";
import { Card, Rate, Spin, Button } from "antd";
import styled from "styled-components";

const ImgLoader = styled.div`
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;

const { Meta } = Card;

const Addon = props => {
  const [loading, setLoading] = useState(true);
  const { title, imageThumbURL } = props.addon;

  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
    return () => {};
  }, []);

  return (
    <Card
      hoverable
      style={{ width: "100%", maxWidth: 150 }}
      bodyStyle={{ padding: "15px 10px" }}
      cover={
        !loading ? (
          <img alt={title} src={imageThumbURL} />
        ) : (
          <ImgLoader>
            <Spin tip="Loading..." />
          </ImgLoader>
        )
      }
    >
      <Meta title={title} />
      <Box>
        <Button size="small">Add</Button>
      </Box>
    </Card>
  );
};

export default Addon;
