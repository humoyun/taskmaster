import React from "react";

// const ProjectView = React.lazy(() => import("./views/ProjectView"));
import { Layouts } from "@/common/constants";

// const Project = React.lazy(() => import("@/views/app"));
// const Backlog = React.lazy(() => import("@/views/app/backlog"));
// const Sprints = React.lazy(() => import("@/views/app/sprints"));

import Project from "@/views/app";
import Backlog from "@/views/app/backlog";
import Sprints from "@/views/app/sprints";

const location = {
  state: {
    layout: Layouts.APP
  }
};

const appRoutes = [
  {
    exact: true,
    path: "/app/:projectId",
    key: "project",
    component: Project,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/backlog",
    key: "backlog",
    component: Backlog,
    location
  },
  {
    exact: true,
    path: "/app/:projectId/sprints",
    key: "sprints",
    component: Sprints,
    location
  }
  // {
  //   exact: true,
  //   path: "/app/:projectId/...",
  //   key: "",
  //   component: ,
  //   location
  // },
];

export default appRoutes;
