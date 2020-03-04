import React from "react";
import { Button, Card, Icon, Tag, Progress } from "antd";
import { Row, Col } from "antd";
import ChatNoDots from "@/icons/chat-no-dots.svg";
import Layers from "@/icons/layers.svg";
import Group from "@/icons/users.svg";
import Attachment from "@/icons/attachment.svg";
import More from "@/icons/more.svg";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const coolColors = {
  dark: "#081426",
  siyohrang: "#5050ff",
  qiziql: "#ff5050",
  grey: "#f5f6fa",
  blue: "#1c74f5",
  textColor: "#6b7d99"
};

function Project({ project }) {
  const history = useHistory();

  const goToProject = pid => {
    history.push(`app/${pid}`);
  };

  return (
    <Card style={{ width: "100%", borderRadius: 5 }} hoverable>
      <Row>
        <Col span={24} style={{ height: "40px" }}>
          <Row type="flex" justify="space-between">
            <Col span={6}>
              <Button onClick={() => goToProject(project.id)} size="small">
                {" "}
                Go to Project
              </Button>
            </Col>
            <Col span={4}>
              <Tag color={project.color}>{project.state}</Tag>
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
          <h3>{project.title}</h3>
          <div style={{ minHeight: 40 }}>
            <span>{`${project.desc.substr(0, 70)}...`}</span>
          </div>
        </Col>

        <Col span={24}>
          <Row>
            <Col span={20} style={{ color: "#c7c7c7", fontSize: "0.9em" }}>
              <div className="date-time">Start date: June 8, 2019</div>
              <div className="date-time">Due date: February 2, 2020</div>
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

Project.propTypes = {
  project: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
};

export default Project;
