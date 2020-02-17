import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const NotFound = props => {
  console.log("not found match ", props.match);
  console.log("not found location ", props.location);
  console.log("not found history ", props.history);

  return (
    <div>
      <h2>Not Found 404</h2>
      <div>
        <code>{location.pathname}</code>
      </div>
      <div>
        You can go to dashboard if authenticated otherwise redirect to Login{" "}
        <Link to="/"></Link>{" "}
      </div>
    </div>
  );
};

export default withRouter(NotFound);
