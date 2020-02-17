import React from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";

const Provider = ({ auth, component: Component, ...rest }) => {
  console.log("----------------", auth);
  console.log("------- rest --", rest);
  let history = useHistory();
  let location = useLocation();
  console.log("------- history --", location);

  if (rest.redirect && !auth.isLogged) {
    console.log("%% auth redirect to login");
    history.replace("/auth/login");
  }

  return (
    <Route
      {...rest}
      render={props =>
        auth.isLogged ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} auth={auth} />
        )
      }
    />
  );
};

export default Provider;
