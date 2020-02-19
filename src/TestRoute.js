import React, { Suspense } from "react";
import RouteWithLayout from "./views/RouteWithLayout";
import { Provider } from "react-redux";

import Routes from "@/routes";
import store from "@/store";
import { BrowserRouter as Router } from "react-router-dom";

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
