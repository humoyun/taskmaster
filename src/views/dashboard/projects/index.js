import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Project from "./Project";
import { Row, Col, Button } from "antd";

const ProjectPageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(224, 239, 226, 0.2), #fff);
`;

function Projects(props) {
  return (
    <ProjectPageWrapper className="tm-projects">
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
    </ProjectPageWrapper>
  );
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(Projects);
