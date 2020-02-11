import React from "react";
import "./App.less";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ForgetPassword from "./views/auth/forget";
// import Home from "./views/Home";
import NotFound from "./views/NotFound";

import MainContent from "./views/content";
import Projects from "./views/projects";
import Project from "./views/projects/Project";
import Teams from "./views/teams";
import Team from "./views/teams/Team";
import Activities from "./views/activity";
import AppView from "./views/AppView";

import RouteWithLayout from "./views/RouteWithLayout";

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

// https://www.wrike.com/

const App = ({ title }) => {
  return (
    <Router>
      {/* Authentication routes */}
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/forget-password" component={ForgetPassword} exact />

      <div className="App">
        <Switch>
          <RouteWithLayout
            path="/"
            layout={AppView}
            component={MainContent}
            exact
          />
          <RouteWithLayout
            path="/projects"
            layout={AppView}
            component={Projects}
            exact
          />
          <RouteWithLayout
            path="/projects/:projectId"
            layout={AppView}
            component={Project}
          />
          <RouteWithLayout
            path="/teams"
            layout={AppView}
            component={Teams}
            exact
          />
          <RouteWithLayout
            path="/teams/:teamId"
            layout={AppView}
            component={Team}
          />
          <RouteWithLayout
            path="/activities"
            layout={AppView}
            component={Activities}
            exact
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
