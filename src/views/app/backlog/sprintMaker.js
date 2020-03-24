import React from "react";
import styled from "styled-components";
import SprintPlanning from "@/icons/app/sprint-planning.svg";
import PropTypes from "prop-types";
import { Button } from "antd";

const Wrapper = styled.div`
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

const TaskList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Task = styled.div`
  flex: 1;
  border: 1px solid #cce;
  border-radius: 3px;
  padding: 5px 10px;
  margin-bottom: 2px;
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

function sprintMaker(Component) {
  // const className = `${type}-`;

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
            {title === "Backlog" ? "Create" : "Start"} Sprint
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

  const isSprintEmpty = (data, index) => {
    if (index === 0 && data.taskList.length === 0) {
      return (
        <EmptySprint className="sprint-empty-info">
          <div className="icon-box">
            <SprintPlanning style={{ width: 88 }}></SprintPlanning>
          </div>
          <div className="info-box">
            <h4>Plan your Sprint</h4>
            <span>
              Drag issues from the <b>Backlog</b> section, or create new issues,
              to plan the work for this sprint. Select
              <b> Start sprint</b> when you are ready.
            </span>
          </div>
        </EmptySprint>
      );
    } else if (data.isBacklog) {
      return <span style={{ color: "#ccc" }}>Your backlog is empty</span>;
    } else if (data.taskList.length === 0) {
      return (
        <span style={{ color: "#ccc" }}>
          Plan a sprint by dragging the sprint footer down below some issues, or
          by dragging issues here.
        </span>
      );
    } else
      return (
        <TaskList>
          {data.taskList.map(task => (
            <Task key={task.id}>{task.name}</Task>
          ))}
        </TaskList>
      );
  };

  return (data, index) => {
    return (
      <Component
        header={makeHeader(data.name, data.taskList.length)}
        key={data.key}
      >
        <Wrapper>{isSprintEmpty(data, index)}</Wrapper>
      </Component>
    );
  };
}

// Sprint.propTypes = {};

export default sprintMaker;
