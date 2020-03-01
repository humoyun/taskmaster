import React from "react";
import { Input, Badge } from "antd";
import Notification from "@/icons/notification.svg";
import Message from "@/icons/message.svg";

import "./style.less";

const { Search } = Input;

export default function Header() {
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
          <Badge count={22}>
            <Notification width="24px" height="24px" />
          </Badge>
          <Badge count={8} style={{ backgroundColor: "#52c41a" }}>
            <Message width="24px" height="24px" />
          </Badge>
        </div>
        <div className="user-profile"></div>
      </div>
    </div>
  );
}
