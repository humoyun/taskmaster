import React from "react";
import { Layouts } from "@/common/constants";

import Home from "@/views/dashboard";

const Projects = React.lazy(() => import("@/views/dashboard/projects"));
const Profile = React.lazy(() => import("@/views/dashboard/profile"));
const AppMarket = React.lazy(() => import("@/views/dashboard/appmarket"));
const Storage = React.lazy(() => import("@/views/dashboard/storage"));

const location = {
  state: {
    layout: Layouts.DASHBOARD
  }
};

const dashRoutes = [
  {
    exact: true,
    path: "/",
    key: "dash",
    component: Home,
    location
  },
  {
    exact: true,
    path: "/projects",
    key: "dash/projects",
    component: Projects,
    location
  },
  {
    exact: true,
    path: "/appmarket",
    key: "dash/appmarket",
    component: AppMarket,
    location
  },
  {
    exact: true,
    path: "/storage",
    key: "dash/storage",
    component: Storage,
    location
  },
  {
    exact: true,
    path: "/profile",
    key: "dash/profile",
    component: Profile,
    location
  }
];

export default dashRoutes;
