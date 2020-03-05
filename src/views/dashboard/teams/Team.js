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
  width: 150;
  height: 100px;
  background: url(https://ptc-directory-sited-static.us-east-1.prod.public.atl-paas.net/gradients/3.svg);
`;

const { Meta } = Card;

const Team = props => {
  const { title, imageThumbURL } = props.team;
  const [loading, setLoading] = useState(!!imageThumbURL);

  const style = {
    width: 150,
    height: 100
  };

  useEffect(() => {
    if (!imageThumbURL) setTimeout(() => setLoading(false), 300);
    return () => {};
  }, []);

  return (
    <Card
      hoverable
      style={{ width: 150, height: 200 }}
      bodyStyle={{ padding: "15px 10px" }}
      cover={
        !loading ? (
          <Box>
            {imageThumbURL && (
              <img alt={title} src={imageThumbURL} style={style} />
            )}
          </Box>
        ) : (
          <ImgLoader>
            <Spin tip="Loading..." />
          </ImgLoader>
        )
      }
    >
      <Meta title={title} />
    </Card>
  );
};

export default Team;
