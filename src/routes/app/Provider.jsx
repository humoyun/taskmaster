import React from "react";
import { Route, Redirect } from "react-router-dom";

const Provider = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isLogged ? (
          <Component {...props} auth={auth} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default Provider;
