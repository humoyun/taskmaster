import React from "react";
import File from "./File";

const files = [
  {
    id: "file-1",
    name: "Documents",
    type: "folder",
    numOfFiles: 14,
    size: "16 Mb",
    icon: "folder",
    createdAt: "",
    updatedAt: "",
    location: "/Documents",
    owner: "Humoyun"
  },
  {
    id: "file-2",
    name: "Backups",
    type: "folder",
    numOfFiles: 2,
    size: "76 Mb",
    icon: "folder",
    createdAt: "",
    location: "/Backups"
  },
  {
    id: "file-3",
    name: "New UI/UX icons",
    type: "folder",
    numOfFiles: 9,
    size: "121 Mb",
    icon: "folder",
    createdAt: "",
    location: "/New UI/UX icons"
  },
  {
    id: "file-4",
    name: "Development Book",
    type: "file",
    extension: "pdf",
    size: "4.5 Mb",
    icon: "pdf"
  },
  {
    id: "file-5",
    name: "Landing page icons",
    type: "file",
    extension: "mp4",
    size: "47 Mb",
    icon: "mp4"
  },
  {
    id: "file-6",
    name: "Presentation",
    type: "file",
    extension: "ppt",
    size: "2.1 Mb",
    icon: "ppt"
  },
  {
    id: "file-7",
    name: "server_config",
    type: "file",
    extension: "json",
    size: "50 Kb",
    icon: "json"
  },
  {
    id: "file-8",
    name: "main-page",
    type: "file",
    extension: "html",
    size: "220 Kb",
    icon: "html"
  }
  // {
  //   id: "file-9",
  //   name: "Company policy",
  //   type: "file",
  //   extension: "doc",
  //   size: "1 Mb"
  // }
];

const FileGrid = () => {
  const fileList = files.map(file => <File key={file.id} file={file}></File>);
  return <div className="storage-file-grid">{fileList}</div>;
};

export default FileGrid;
