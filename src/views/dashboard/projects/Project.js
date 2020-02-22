import React from "react";
import {
  Skeleton,
  Switch,
  Button,
  Card,
  Icon,
  Avatar,
  Tag,
  Progress
} from "antd";
import { Row, Col } from "antd";
import ChatNoDots from "@/icons/chat-no-dots.svg";
import Layers from "@/icons/layers.svg";
import Group from "@/icons/group.svg";
import Attachment from "@/icons/attachment.svg";
import More from "@/icons/more.svg";
import {useHistory, useLocation} from 'react-router-dom'

const { Meta } = Card;

const coolColors = {
  dark: "#081426",
  siyohrang: "#5050ff",
  qiziql: "#ff5050",
  grey: "#f5f6fa",
  blue: "#1c74f5",
  textColor: "#6b7d99"
};

export default function Project(props) {

  const history = useHistory();

  const goToProject = (id) => {
    console.log('fewfwe--------fewfewfew: ', id)
    history.push(`app/${id}`);
  }

  return (
    <Card style={{ width: '100%', borderRadius: 5 }} hoverable>
      <Row>
        <Col span={24} style={{ height: "40px" }}>
          <Row type="flex" justify="space-between">
            <Col span={6}>
              <Button onClick={() => goToProject(props.item.id)} size="small"> Go to Project</Button>
            </Col>
            <Col span={4}>
              <Tag color={props.item.color}>{props.item.state}</Tag>
            </Col>
            <Col span={2}>
              <Icon
                style={{ fontSize: "20px", color: "#333" }}
                component={More}
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <h3>{props.item.title}</h3>
          <p>{`${props.item.desc.substr(0,70)}...`}</p>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={20} style={{ color: "#c7c7c7", fontSize: "0.9em" }}>
              <span style={{ display: "inline-block" }} className="date-time">
                Start date: June 8, 2019
              </span>
              <span style={{ display: "inline-block" }} className="date-time">
                Due date: February 2, 2020
              </span>
            </Col>
            <Col span={4}>
              <Progress type="circle" percent={30} width={50} />
            </Col>
          </Row>
        </Col>

        <Col span={18}>
          <Row type="flex" justify="space-between">
            <Col span={6} style={{ display: "flex", alignContent: "center" }}>
              <Icon
                style={{ fontSize: "22px", color: "#333" }}
                component={Group}
              />
              <span style={{ marginLeft: "4px" }}>12</span>
            </Col>
            <Col span={6} style={{ display: "flex", alignContent: "center" }}>
              <Icon
                style={{ fontSize: "22px", color: "#333" }}
                component={ChatNoDots}
              />
              <span style={{ marginLeft: "4px" }}>9</span>
            </Col>
            <Col span={6} style={{ display: "flex", alignContent: "center" }}>
              <Icon
                style={{ fontSize: "22px", color: "#333" }}
                component={Attachment}
              />
              <span style={{ marginLeft: "4px" }}>5</span>
            </Col>
            <Col span={6} style={{ display: "flex", alignContent: "center" }}>
              <Icon
                style={{ fontSize: "22px", color: "#333" }}
                component={Layers}
              />
              <span style={{ marginLeft: "4px" }}>7/2</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
