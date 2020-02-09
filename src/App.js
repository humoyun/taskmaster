import React from "react";
import "./App.less";
import Login from "./views/auth/login";

import Register from "./views/auth/register";
import ForgetPassword from "./views/auth/forget";
import Home from "./views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = ({ title }) => {
  return (
    <Router>
      {/* Authentication routes */}
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/forget-password" component={ForgetPassword} exact />

      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
