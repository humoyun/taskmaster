import React from "react";

export default function Project({ match }) {
  return <div className="tm-project">Project Page {match.path}</div>;
}
