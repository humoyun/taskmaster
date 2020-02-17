import React from "react";
import ReactDOM from "react-dom";
// import App from "./Main";
import App from "./TestRoute";
import "./Main.less";

const title = "React with Webpack and Babel 2";

ReactDOM.render(<App title={title} />, document.getElementById("root"));

module.hot.accept();
