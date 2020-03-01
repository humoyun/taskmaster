import React from "react";
import { Input } from "antd";
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
          <Notification width="20px" height="20px"></Notification>
          <Message width="20px" height="20px"></Message>
        </div>
        <div className="user-profile"></div>
      </div>
    </div>
  );
}
