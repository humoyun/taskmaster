import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import connect from "react-redux";
import styled from "styled-components";
import AddEvent from "./AddEvent";
import Event from "./Event";

const EventPanel = styled.div`
  flex: 1;
`;
const InfoPanel = styled.div`
  flex: 1;
`;

const Sidebar = props => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  const nums3 = [
    { id: "num-1", name: "New theme release", color: "#1abc9c", type: "event" },
    { id: "num-2", name: "New UI/UX meeting", color: "#4fc6e1", type: "event" },
    { id: "num-3", name: "Security testing", color: "#f7b84b", type: "event" },
    { id: "num-4", name: "Bug fix", color: "#f1556c", type: "event" }
  ];

  const eventBoxes = nums3.map(event => (
    <Event key={event.id} evt={event}></Event>
  ));

  return (
    <div className="calendar-sidebar">
      <EventPanel>
        <Button onClick={() => setVisible(true)} type="primary" block>
          + Create New Event
        </Button>

        <div style={{ margin: "15px auto" }}>
          <span>Drag and drop your event or click in the calendar</span>
        </div>

        <div className="event-box-list">{eventBoxes}</div>

        <Checkbox checked={checked} onChange={e => handleChange(e)}>
          Remove after drop
        </Checkbox>
      </EventPanel>
      <InfoPanel></InfoPanel>

      <AddEvent
        visible={visible}
        closeModal={() => setVisible(false)}
      ></AddEvent>
    </div>
  );
};

export default Sidebar;
