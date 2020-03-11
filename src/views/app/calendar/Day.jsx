import React from "react";
import styled from "styled-components";
import { darken, lighten } from "polished";
import { useDrop } from "react-dnd";
import dayjs from "dayjs";
import Types from "./types";

window.dayjs = dayjs;

const DayBox = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  padding: 0 4px;
  border-radius: 50%;
  background-color: #f1f5f7;
`;

const EventBox = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 22px;
  padding: 0 5px;
  background-color: ${props => props.color};
  color: #fff;
  border-radius: 2px;
  cursor: move;
  margin-bottom: 2px;
  font-size: 0.9em;
  transition: background-color 0.1s;

  span {
    width: 100%;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${props => darken(0.1, props.color)};
  }
`;

const EWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

const Day = props => {
  const day = props.day;

  const allowedDropEffect = "any";

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: Types.EVENT,
    drop: () => ({ name: `Day-${day.day}` }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = canDrop && isOver;
  const today = new Date().getDate();
  let backgroundColor = day.day === today ? "#fcf8e3" : "#fff";

  const map = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT"
  };

  const dayOfWeek = dayjs()
    .startOf("month")
    .day();
  const firstDayOfWeek = map[dayOfWeek];

  if (isActive) {
    backgroundColor = "#e0faff";
  } else if (canDrop) {
    backgroundColor = "#fff";
  }

  const events = [
    {
      id: "event-1",
      title: "New UI/UX design meeting",
      date: "",
      time: "",
      owner: "",
      participants: [],
      type: "primary",
      color: "#1abc9c"
    },
    {
      id: "event-2",
      title: "Security bug fixing",
      date: "",
      time: "",
      owner: "",
      participants: [],
      type: "warning",
      color: "#f7b84b" // temporary
    }
    // {
    //   id: "event-3",
    //   title: "",
    //   date: "",
    //   time: "",
    //   owner: "",
    //   participants: [],
    //   type: "info",
    //   color: "#4fc6e1",
    // }
  ];

  return (
    <div className="day-of-month" ref={drop} style={{ backgroundColor }}>
      <DayBox>{day.day}</DayBox>
      <EWrapper>
        {day.day === today &&
          events.map(evt => (
            <EventBox key={evt.id} color={evt.color}>
              <span>{evt.title}</span>
            </EventBox>
          ))}
      </EWrapper>
    </div>
  );
};

export default Day;
