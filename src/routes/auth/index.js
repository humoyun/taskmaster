import React from "react";
import { Layouts } from "@/common/constants";
import Login from "@/views/auth/login";

const Register = React.lazy(() => import("@/views/auth/register"));
const ForgetPassword = React.lazy(() => import("@/views/auth/forget"));
// const Verify = React.lazy(() => import("@/views/app/sprints"));

const location = {
  state: {
    layout: Layouts.AUTH
  }
};

const authRoutes = [
  {
    exact: true,
    path: "/auth",
    key: "auth",
    component: Login,
    redirect: "/auth/login",
    location
  },
  {
    exact: true,
    path: "/auth/login",
    key: "auth/login",
    component: Login,
    location
  },
  {
    exact: true,
    path: "/auth/register",
    key: "auth/register",
    component: Register,
    location
  },
  {
    exact: true,
    path: "/auth/forget-password",
    key: "auth/forget-password",
    component: ForgetPassword,
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

export default authRoutes;
