import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

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
}
