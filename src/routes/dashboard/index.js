import React from "react";
// const ProjectView = React.lazy(() => import("./views/ProjectView"));
import { Layouts } from "@/common/constants";
import Projects from "@/views/dash/projects";
import Teams from "@/views/dash/teams";
import Dash from "@/views/dash";

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
  }
  // {
  //   exact: true,
  //   path: "/app/project/:projectId/...",
  //   key: "",
  //   component: ,
  //   location
  // },
];

export default dashRoutes;
