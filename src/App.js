import React from "react";
import "./App.less";
import Login from "./views/auth/login";
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
