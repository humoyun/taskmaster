import React from "react";
import styled from "styled-components";
import { Icon, Button, Radio } from "antd";

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

function Calendar({ days }) {
  const nums2 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const daysOfWeek = nums2.map(dw => (
    <div key={dw} className="day-of-week">
      <span>{dw}</span>
    </div>
  ));

  return (
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
  );
}

export default Calendar;
