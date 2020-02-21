import React from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";

const Provider = ({ auth, component: Component, ...rest }) => {

  // let history = useHistory();
  // let location = useLocation();
  // console.log('loca: ', location);
  // console.log(history);

  // if (rest.redirect && !auth.isLogged) {
  //   console.log("%% app/ to app/:id");
  //   history.replace(`/app/${location}`);
  // }

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
