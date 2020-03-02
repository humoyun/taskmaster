import React from "react";
import { Input, Badge, Popover } from "antd";
import Notification from "@/icons/notification.svg";
import Message from "@/icons/message.svg";

import "./style.less";

const { Search } = Input;

function Header() {
  const ntfText = <span>Notifications</span>;
  const msgText = <span>Messages</span>;

  const ntfContent = (
    <div classNam="notifications-box">
      <p>notification 1</p>
      <p>notification 2</p>
      <p>notification 3</p>
      <p>notification 4</p>
    </div>
  );

  const msgContent = (
    <div classNam="notifications-box">
      <p>message 1</p>
      <p>message 2</p>
      <p>message 3</p>
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
