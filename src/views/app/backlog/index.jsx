import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
import styled from "styled-components";
import sprintMaker from "./sprintMaker";
import "./style.less";

const backlog = { name: "Backlog", taskList: [], isBacklog: true };
const sprints = [
  { id: "sprint-id-1", name: "Project title: Sprint 1", taskList: [] },
  {
    id: "sprint-id-2",
    name: "Project title: Sprint 2",
    taskList: [
      { id: "sprint2-task-1", name: "Editor buttons not responsive" },
      { id: "sprint2-task-2", name: "Viewer header update " }
    ]
  },
  {
    id: "sprint-id-3",
    name: "Project title: Sprint 3",
    taskList: [
      { id: "sprint3-task-1", name: "Editor control icons update" },
      { id: "sprint3-task-2", name: "Dashboard project card issue" },
      { id: "sprint3-task-3", name: "Firefox touch support" }
    ]
  },
  { id: "sprint-id-4", name: "Project title: Sprint 4", taskList: [] }
];

const Backlog = props => {
  const callback = key => {
    console.log(key);
  };

  return (
    <div className="project-backlog-page">
      <h2>Backlog</h2>

      <Collapse
        bordered={false}
        defaultActiveKey={[sprints[0].id]}
        onChange={callback}
      >
        {sprints.map((sprint, index) => sprintMaker(Panel)(sprint, index))}

        {sprintMaker(Panel)(backlog, sprints.length)}

        {/* <Sprint data={backlog} key="backlog">
          <span style={{ color: "#ccc" }}>Your backlog is empty</span>
        </Sprint> */}
      </Collapse>
    </div>
  );
};

export default Backlog;
