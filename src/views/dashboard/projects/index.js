import React from "react";
import { connect } from "react-redux";
import Project from "./Project";
import { Row, Col, Button } from "antd";
import "./style.less";

function Projects(props) {
  return (
    <div className="tm-projects-page">
      <Row gutter={[16, 16]} type="flex" justify="start" flexwrap="wrap">
        <Col span={24}>
          <Button> + Create Project</Button>
        </Col>

        {props.projects.map(item => (
          <Col key={item.id} xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
            <Project project={item} key={item.id}></Project>
          </Col>
        ))}
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(Projects);
