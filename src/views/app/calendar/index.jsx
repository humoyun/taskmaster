import React, { useState } from "react";
import { Icon, Button, Checkbox } from "antd";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import styled from "styled-components";
import { Radio } from "antd";
import Day from "./Day";
import Sidebar from "./Sidebar";

import "./style.less";

const LeftControls = styled.div`
  flex: 1;
`;

const RightControls = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const CurrentDate = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
// #fcf8e3;
const Calendar = props => {
  const nums = Array(42)
    .fill(1)
    .map((i, ind) => ({
      day: ind + 1,
      id: Math.random()
        .toString(36)
        .slice(2, 8),
      events: []
    }));

  const days = nums.map(day => <Day key={day.id} day={day}></Day>);

  const nums2 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const daysOfWeek = nums2.map(dw => (
    <div key={dw} className="day-of-week">
      <span>{dw}</span>
    </div>
  ));

  return (
    <div className="tm-calendar-wrapper">
      <DndProvider backend={Backend}>
        <Sidebar></Sidebar>

        <div className="calendar-section">
          <div className="calendar-header">
            <LeftControls>
              <Button>
                <Icon type="left" theme="outlined" />
              </Button>
              <Button>
                <Icon type="right" theme="outlined" />
              </Button>

              <Button disabled type="primary" style={{ marginLeft: 10 }}>
                Today
              </Button>
            </LeftControls>

            <CurrentDate>
              <h2>MARCH 2020</h2>
            </CurrentDate>

            <RightControls>
              <Radio.Group defaultValue="month" buttonStyle="solid">
                <Radio.Button value="month">Month</Radio.Button>
                <Radio.Button value="week">Week</Radio.Button>
                <Radio.Button value="day">Day</Radio.Button>
              </Radio.Group>
            </RightControls>
          </div>

          <div className="calendar">
            <div className="days-header">{daysOfWeek}</div>
            <div className="days">{days}</div>
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default Calendar;
