import React from "react";

export default function Projects() {
  const list = [
    { id: "prj-1", title: "Jira" },
    { id: "prj-2", title: "Atlassian" },
    { id: "prj-3", title: "Matterport" },
    { id: "prj-4", title: "SendBird" }
  ];
  return (
    <div className="tm-projects">
      {list.map(project => (
        <div className="project-item" key={project.id}>
          {project.title}
        </div>
      ))}
    </div>
  );
}
