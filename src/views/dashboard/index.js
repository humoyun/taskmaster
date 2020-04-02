import React from "react";
import "./style.less";
import DashGrid from "./components/DashGrid";

export default function Home(props) {
  return (
    <div className="main-dashboard-panel">
      <div style={{ color: "#ccc", marginBottom: "10px", fontStyle: "italic" }}>
        Main Dashboard Panel (Each widget will load statistics data separately
        without blocking dashboard page with skeletons)
      </div>

      <DashGrid></DashGrid>
    </div>
  );
}
