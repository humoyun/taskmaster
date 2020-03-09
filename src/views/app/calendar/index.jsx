import React, { useState } from "react";

import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

import Day from "./Day";
import Calendar from "./Calendar";
import Sidebar from "./Sidebar";

import "./style.less";

/**
 * Stale-While-Revalidate technique should be applied in Calendar
 *
 * https://www.toptal.com/react-hooks/stale-while-revalidate
 */

// #fcf8e3;
const CalWrapper = props => {
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

  return (
    <div className="tm-calendar-wrapper">
      <DndProvider backend={Backend}>
        <Sidebar></Sidebar>

        <Calendar days={days}></Calendar>
      </DndProvider>
    </div>
  );
};

export default CalWrapper;
