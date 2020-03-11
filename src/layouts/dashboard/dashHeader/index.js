import React from "react";
import { Input, Badge, Popover } from "antd";

import Notification from "@/icons/notification.svg";
import Message from "@/icons/message.svg";
import styled from "styled-components";
import "./style.less";

const { Search } = Input;

const Notif = styled.div`
  dislplay: flex;
  flex-direction: row;

  div {
  }
`;
const Msg = styled.div``;

function Header() {
  const ntfText = <span>Notifications</span>;
  const msgText = <span>Messages</span>;

  const notifs = [
    "notification 1",
    "notification 2",
    "notification 3",
    "notification 4"
  ];

  const messages = ["messages 1", "messages 2", "messages 3", "messages 4"];

  const ntfContent = (
    <div className="notifications-box">
      {notifs.map(ntf => (
        <div key={ntf}>{ntf}</div>
      ))}
    </div>
  );
  const msgContent = (
    <div className="messages-box">
      {messages.map(msg => (
        <div key={msg}>{msg}</div>
      ))}
    </div>
  );

  return (
    <div className="tm-header">
      <div className="left-part">
        <Search
          className="tm-input"
          placeholder="Search..."
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div className="right-part">
        <div className="icons">
          <Popover
            placement="bottomRight"
            title={ntfText}
            content={ntfContent}
            trigger="click"
          >
            <Badge count={22}>
              <Notification width="24px" height="24px" />
            </Badge>
          </Popover>

          <Popover
            placement="bottomRight"
            title={msgText}
            content={msgContent}
            trigger="click"
          >
            <Badge count={8} style={{ backgroundColor: "#52c41a" }}>
              <Message width="24px" height="24px" />
            </Badge>
          </Popover>
        </div>
        <div className="user-profile"></div>
      </div>
    </div>
  );
}

export default Header;
