import React from "react";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import Types from "./types";

const EventBox = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px 15px;
  background-color: ${props => props.color};
  color: #fff;
  border-radius: 2px;
  cursor: move;
  margin-bottom: 10px;

  svg {
    margin-right: 5px;
  }
`;

export default function Event(props) {
  const evt = props.evt;

  const [{ isDragging }, drag] = useDrag({
    item: { ...{ type: Types.EVENT }, ...evt },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div ref={drag}>
      <EventBox className="event-box" color={evt.color}>
        <svg height="10" width="10">
          <circle
            cx="5"
            cy="5"
            r="4"
            stroke="#fff"
            strokeWidth="1"
            fill="#fff"
          />
        </svg>

        {evt.name}
      </EventBox>
    </div>
  );
}
