import React, { Suspense } from "react";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import ForgetPassword from "./views/auth/forget";
// import Home from "./views/Home";
import NotFound from "./views/NotFound";

import MainContent from "./views/content";
import Projects from "./views/dashboard/projects";
import Project from "./views/dashboard/projects/Project";
import Teams from "./views/dashboard/teams";
import Team from "./views/dashboard/teams/Team";
import Activities from "./views/dashboard/activity";
import AppView from "./views/AppView";

import RouteWithLayout from "./views/RouteWithLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// https://www.wrike.com/

const Main = ({ title }) => {
  return (
    <Router>
      {/* Authentication routes */}
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/forget-password" component={ForgetPassword} exact />
      {/* <Route path="/reset" component={Reset} exact /> */}
      {/* <Route path="/verify" component={Verify} exact /> */}

      <div className="Main">
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

export default Main;
