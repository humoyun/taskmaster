import React from "react";
import { Collapse, Button } from "antd";
import styled from "styled-components";
import SprintPlanning from "@/icons/app/sprint-planning.svg";
import "./style.less";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Sprint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  padding: 20px;
`;

const EmptySprint = styled.div`
  width: 40%;
  min-width: 300px;
  display: flex;

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .info-box {
    span {
      font-size: 0.9em;
    }
  }
`;

const SprintHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .sprint-title {
    span {
      display: inline-block;
      margin-left: 10px;
      color: #ccc;
    }
  }

  .sprint-action {
    color: #fff;
  }
`;

const Backlog = props => {
  const callback = key => {
    console.log(key);
  };

  const makeHeader = (title, issues) => {
    return (
      <SprintHeader>
        <div className="sprint-title">
          {title} <span>{issues} issues</span>
        </div>
        <div className="sprint-action">
          <Button
            type="primary"
            size="small"
            onClick={e => handleSprintStart(e)}
          >
            Start Sprint
          </Button>
        </div>
      </SprintHeader>
    );
  };

  const handleSprintStart = e => {
    // e.preventDefault();
    e.stopPropagation();
    console.log("handleSprintStart: ", e);
  };

  return (
    <div className="project-backlog-page">
      <h2>Backlog</h2>
      <Collapse bordered={false} defaultActiveKey={["1"]} onChange={callback}>
        <Panel header={makeHeader("Project: Sprint 1", 5)} key="1">
          <Sprint>
            <EmptySprint className="sprint-empty-info">
              <div className="icon-box">
                <SprintPlanning style={{ width: 88 }}></SprintPlanning>
              </div>
              <div className="info-box">
                <h4>Plan your Sprint</h4>
                <span>
                  Drag issues from the <b>Backlog</b> section, or create new
                  issues, to plan the work for this sprint. Select
                  <b> Start sprint</b> when you are ready.
                </span>
              </div>
            </EmptySprint>
          </Sprint>
        </Panel>
        <Panel header={makeHeader("Project: Sprint 2", 12)} key="2">
          <Sprint>
            <span style={{ color: "#ccc" }}>
              Plan a sprint by dragging the sprint footer down below some
              issues, or by dragging issues here.
            </span>
          </Sprint>
        </Panel>
        <Panel header={makeHeader("Project: Sprint 3", 21)} key="3">
          <Sprint>
            <span style={{ color: "#ccc" }}>
              Plan a sprint by dragging the sprint footer down below some
              issues, or by dragging issues here.
            </span>
          </Sprint>
        </Panel>
        <Panel header={makeHeader("Backlog", 35)} key="backlog">
          <Sprint>
            <span style={{ color: "#ccc" }}>Your backlog is empty</span>
          </Sprint>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Backlog;
