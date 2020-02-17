import React from "react";
import { Spin } from "antd";
import "./style.less";

export default function Loader() {
  return (
    <div className="spinner">
      <Spin tip="...Loading"></Spin>
    </div>
  );
}
