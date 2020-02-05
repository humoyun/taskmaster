import React, { useState, useEffect } from "react";
import "./App.less";
import { Layout } from "antd";
import ContentHeader from "./views/header";
import MainSidebar from "./views/sidebar/MainSidebar";
import Login from "./Login";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = ({ title }) => {
  return (
    <Router>
      <Route path="/login" component={Login} exact />

      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
