import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProjects } from "@/store/actions/projects";
import Project from "./Project";
import { Row, Col, Button } from "antd";
import "./style.less";

function Projects({ projects, getProjects }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const call = async () => await getProjects();
    call();
    setLoading(false);
    console.log("< -- projects page useEffect");

    return () => {
      console.log("projects clean up");
    };
  }, []);

  return (
    <div className="tm-projects-page">
      <Row gutter={[16, 16]} type="flex" justify="start" flexwrap="wrap">
        <Col span={24}>
          <Button> + Create Project</Button>
        </Col>

        {!loading &&
          projects.map(item => (
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

const mapDispatchToProps = dispatch => {
  return { getProjects: () => dispatch(getProjects()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
