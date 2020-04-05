import React from "react";
import { Provider } from "react-redux";
import Routes from "@/routes";
import store from "@/store";
import "./utils/download";
import { BrowserRouter as Router } from "react-router-dom";
import "./Main.less";

// https://www.wrike.com/

const Main = ({ title }) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes></Routes>
      </Router>
    </Provider>
  );
};

export default Main;
