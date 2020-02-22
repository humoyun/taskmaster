import React from "react";
import { Layouts } from "@/common/constants";
import Projects from "@/views/dashboard/projects";
import Teams from "@/views/dashboard/teams";
import Activity from "@/views/dashboard/activity";
import Marketplace from "@/views/dashboard/marketplace";
import Storage from "@/views/dashboard/storage";
import Profile from "@/views/dashboard/Profile";
import Dash from "@/views/dashboard";

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
    component: Dash,
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
    path: "/teams",
    key: "dash/teams",
    component: Teams,
    location
  },
  {
    exact: true,
    path: "/activities",
    key: "dash/activity",
    component: Activity,
    location
  },
  {
    exact: true,
    path: "/marketplace",
    key: "dash/marketplace",
    component: Marketplace,
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
