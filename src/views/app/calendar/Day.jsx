import React from "react";
import { useDrop } from "react-dnd";
import dayjs from "dayjs";
import Types from "./types";

window.dayjs = dayjs;

const Day = props => {
  const day = props.day;

  const allowedDropEffect = "any";

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: Types.EVENT,
    drop: () => ({ name: "Day" }),
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
    backgroundColor = "#dee2e6";
  } else if (canDrop) {
    backgroundColor = "#fff";
  }

  return (
    <div className="day" ref={drop} style={{ backgroundColor }}>
      <span>{day.day}</span>
    </div>
  );
};

export default Day;
