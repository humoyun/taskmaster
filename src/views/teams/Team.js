import React from "react";

export default function Team({ match }) {
  console.log(match);
  return (
    <div className="tm-team">
      Team
      <div>{match.path}</div>
      <div>{match.url}</div>
      <div>{match.params.teamId}</div>
    </div>
  );
}
