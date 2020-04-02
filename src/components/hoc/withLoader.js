import React from "react";
import { Loader } from "@/components/loader";

const withLoader = Component => {
  return ({ loading, ...props }) => {
    if (loading) return <Loader></Loader>;

    return <Component {...props} />;
  };
};

export default withLoader;
