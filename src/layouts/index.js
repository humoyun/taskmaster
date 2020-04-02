import React from "react";

import { Layouts } from "@/common/constants";

import AppLayout from "./app";
import DashboardLayout from "./dashboard";
import AuthLayout from "./auth";
import Blank from "./blank";
import NotFoundLayout from "./404";

const LayoutProvider = ({ layout, children }) => {
  switch (layout) {
    case Layouts.APP:
      return <AppLayout>{children}</AppLayout>;

    case Layouts.DASHBOARD:
      return <DashboardLayout>{children}</DashboardLayout>;

    case Layouts.ADMIN:
      return <ADMIN>{children}</ADMIN>;

    case Layouts.AUTH:
      return <AuthLayout>{children}</AuthLayout>;

    case Layouts.NOT_FOUND:
      return <NotFoundLayout>{children}</NotFoundLayout>;

    default:
      return <Blank />;
  }
};

export default LayoutProvider;
