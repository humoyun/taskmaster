import React from "react";
import styled from 'styled-components';
import Project from './Project'

const ProjectPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  background-color: rgb(254, 255, 255);
`

export default function Projects() {
  const list = [
    { id: "prj-1", title: "Contentful App", desc: 'Since the advent of React Hooks, a lot of things have changed', state: 'In Progress', color:'green' },
    { id: "prj-2", title: "Atlassian", desc: 'React Router is a popular declarative way of managing routes in React applications', state: 'Completed', color: 'blue' },
    { id: "prj-3", title: "Matterport", desc: 'If you were building a React app and you had three pages', state: 'Created', color: 'gold' },
  ];

  return (
    <ProjectPageWrapper className="tm-projects">
      {list.map(item => (
        <Project item={item} key={item.id}></Project>
      ))}
      
    </ProjectPageWrapper>
  );
}
