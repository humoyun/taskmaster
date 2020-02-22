import React, { Suspense, useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  matchPath
} from "react-router-dom";
import { connect } from "react-redux";

import LayoutProvider from "@/layouts";

import { Layouts } from "@/common/constants";

import appRoutes from "./app";
import AppProvider from "./app/provider";
import authRoutes from "./auth";
import AuthProvider from "./auth/provider";
import dashRoutes from "./dashboard";
import DashProvider from "./dashboard/provider";

import myCookie from "@/common/myCookie";
import Utils from "@/utils/Utils";

const getRouteObject = wanted => {
  const allRoutes = [...appRoutes, ...authRoutes, ...dashRoutes];
  const routeObj = allRoutes.find(route => {
    const match = matchPath(wanted, route);
    if (match) return route;
    return null;
  });
  console.log(">>? ", allRoutes);

  return routeObj;
};

const isUndefinedNull = arg => arg === undefined || arg === null;

const Routes = () => {
  const [layout, setLayout] = useState(Layouts.DEFAULT);
  const location = useLocation();
  const history = useHistory();

  const auth = {
    isLogged: myCookie.getToken()
  };

  useEffect(() => {
    /**
     * Handling when browesrHistory just created and no layout.key in the location object
     * the condition is fulfilled when user first time visit or enter the the app url
     * for example: user enter '/app/map' in the address bar and the map page uses a different layout
     * Switch will reset every children Route location property at the very beginning
     */
    const routeObj = getRouteObject(location.pathname);
    const routeObjLayout = Utils._get(routeObj, "location.state.layout");
    if (history.action === "POP" && isUndefinedNull(location.key)) {
      if (routeObjLayout) {
        console.log("++++ routeObjLayout is empty");
        setLayout(routeObjLayout);
      } else {
        console.log("nnot found layout");
        setLayout(Layouts.NOT_FOUND);
      }
      console.log("++++ initial case >> routeObjLayout: ", routeObjLayout);
      console.log("++++ routeObj >> ", routeObj);
    } else if (Utils._get(location, "state.layout")) {
      console.log("++++ second case: state.layout >> ");
      setLayout(location.state.layout); // USE CUSTOM LAYOUT IN APP LAYOUT WHEN LOCATION.STATE.LAYOUT IS SET
    } else if (auth.isLogged) {
      console.log("++++ accessToken issoyo >> ");
      // setLayout(Layouts.DASHBOARD); // DEFAULT LAYOUT WHEN USER IS AUTHENTICATED

      if (routeObjLayout) {
        console.log("++++ routeObjLayout is empty");
        setLayout(routeObjLayout);
      } else {
        console.log("nnot found layout");
        setLayout(Layouts.NOT_FOUND);
      }
    } else {
      console.log("+++++ auth >> layout");
      setLayout(Layouts.AUTH); // USE PUBLIC LAYOUT WHEN USER IS NOT AUTHENTICATED
    }
  }, [location, history.action, auth.isLogged]);

  const appRoutesProvider = appRoutes.map(conf => (
    <AppProvider {...conf} auth={auth}></AppProvider>
  ));

  const authRoutesProvider = authRoutes.map(conf => (
    <AuthProvider {...conf} auth={auth}></AuthProvider>
  ));

  const dashRoutesProvider = dashRoutes.map(conf => (
    <DashProvider {...conf} auth={auth}></DashProvider>
  ));

  // console.log("appRoutesProvider: ", appRoutesProvider);

  /**
   * Better comments
   * * Important message
   * ! deprecated method, do not use
   * ? should this feature be supported
   * TODO: todo something
   */
  return (
    <LayoutProvider layout={layout}>
      <Suspense fallback={<div>Auth Loading...</div>}>
        <Switch>
          {authRoutesProvider}
          {appRoutesProvider}
          {dashRoutesProvider}
        </Switch>
      </Suspense>
    </LayoutProvider>
  );
};

const mapStateToProps = state => {
  console.log("mapStateToProps >>> ", { ...state.auth });
  return { ...state.auth };
};

const connectedRoutes = connect(mapStateToProps)(Routes);

export default connectedRoutes;
