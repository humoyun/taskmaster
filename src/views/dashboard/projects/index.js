import React from "react";
import styled from 'styled-components';
import Project from './Project'
import { Row, Col } from 'antd';

const ProjectPageWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: linear-gradient(rgba(224,239,226,.2), #fff);
`

export default function Projects() {
  const list = [
    { id: "prj-1", title: "Contentful App", desc: 'Since the advent of React Hooks, a lot of things have changed', state: 'In Progress', color:'green' },
    { id: "prj-2", title: "Atlassian", desc: 'React Router is a popular declarative way of managing routes in React applications', state: 'Completed', color: 'blue' },
    { id: "prj-3", title: "Matterport", desc: 'If you were building a React app and you had three pages', state: 'Created', color: 'gold' },
  ];

  return (
    <ProjectPageWrapper className="tm-projects">

    <Row gutter={[16, 16]} type="flex" justify="start" flexwrap="wrap">
      {list.map(item => (
        <Col xs={24} sm={24} md={24} lg={12} xl={8} xxl={6} key={item.id}>
          <Project item={item} key={item.id}></Project>
        </Col>
      ))}
    </Row>



      
    </ProjectPageWrapper>
  );
}
