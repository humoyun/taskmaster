import React from "react";
import { Layouts } from "@/common/constants";

// const Project = React.lazy(() => import("@/views/app"));
const Backlog = React.lazy(() => import("@/views/app/backlog"));
const Sprints = React.lazy(() => import("@/views/app/sprints"));
const Calendar = React.lazy(() => import("@/views/app/calendar"));
const Analytics = React.lazy(() => import("@/views/app/analytics"));
const Members = React.lazy(() => import("@/views/app/members"));

const location = {
  state: {
    layout: Layouts.APP
  }
};

const appRoutes = [
  {
    exact: true,
    path: "/app/:projectId/backlog",
    key: "app/backlog",
    component: Backlog,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/sprints",
    key: "app/sprints",
    component: Sprints,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/calendar",
    key: "app/calendar",
    component: Calendar,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/members",
    key: "app/members",
    component: Members,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/analytics",
    key: "app/analytics",
    component: Analytics,
    location
  }
];

export default appRoutes;
