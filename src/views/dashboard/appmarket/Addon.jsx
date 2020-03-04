import React from "react";
import { Card, Rate } from "antd";

const { Meta } = Card;

const Addon = props => {
  const { title, imageThumbURL } = props.addon;

  return (
    <Card
      hoverable
      style={{ width: "100%", maxWidth: 150 }}
      bodyStyle={{ padding: "15px 10px" }}
      cover={<img alt={title} src={imageThumbURL} />}
    >
      <Meta title={title} description="www.taskmaster.com" />
    </Card>
  );
};

export default Addon;
