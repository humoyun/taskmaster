import { SELECT_FILE, DRIVE_LOADED } from "../types";

const initialState = {
  files: [
    {
      id: "file-id-1",
      name: "Documents",
      type: "folder",
      numOfFiles: 4,
      size: "16 Mb",
      extension: "folder",
      createdAt: "02-08-2018",
      lastOpened: "07-08-2018",
      location: "/root",
      owner: "Humoyun"
    },
    {
      id: "file-id-2",
      name: "Media files",
      type: "folder",
      numOfFiles: 12,
      size: "76 Mb",
      extension: "folder",
      createdAt: "12-03-2019",
      lastOpened: "02-05-2019",
      location: "/Backups"
    },
    {
      id: "file-id-3",
      name: "New UI/UX icons",
      type: "folder",
      numOfFiles: 9,
      size: "121 Mb",
      extension: "folder",
      createdAt: "2018-01-12",
      lastOpened: "2019-02-22",
      location: "/New UI/UX icons"
    },
    {
      id: "file-id-4",
      name: "Development Book",
      type: "file",
      extension: "pdf",
      createdAt: "2019-11-21",
      lastOpened: "2020-01-02",
      size: "4.5 Mb"
    },
    {
      id: "promotional-trailer",
      name: "Promotional trailer",
      type: "file",
      extension: "mp4",
      url:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/video/rabbitjon.mp4",
      size: "1 Mb"
    },
    {
      id: "file-6",
      name: "presentation",
      type: "file",
      extension: "ppt",
      size: "2.1 Mb",
      createdAt: "2019-11-01",
      lastOpened: "2019-11-21"
    },
    {
      id: "file-id-7",
      name: "server_config",
      type: "file",
      extension: "json",
      size: "50 Kb",
      createdAt: "2019-04-08",
      lastOpened: "2019-11-01"
    },
    {
      id: "file-8",
      name: "main-page",
      type: "file",
      extension: "html",
      size: "220 Kb",
      createdAt: "2019-03-12",
      lastOpened: "2019-09-15"
    },
    {
      id: "file-id-9",
      name: "Company policy",
      type: "file",
      extension: "doc",
      size: "1 Mb"
    },
    {
      id: "file-id-10",
      name: "server log files",
      type: "file",
      extension: "txt",
      size: "1 Mb"
    },
    {
      id: "file-id-11",
      name: "budget report",
      type: "file",
      extension: "xls",
      size: "1 Mb"
    },
    {
      id: "file-id-12",
      name: "netlify-config",
      type: "file",
      extension: "xml",
      size: "1 Mb"
    },
    {
      id: "file-id-13",
      name: "server.js",
      type: "file",
      extension: "js",
      size: "1 Mb"
    },
    {
      id: "genetics-101",
      name: "genetics-101",
      type: "file",
      extension: "mp4",
      url:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/video/genetics-101.mp4",
      size: "18 Mb"
    },
    {
      id: "file-manager",
      name: "file manager UI",
      type: "file",
      extension: "png",
      url:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/file-manager.png",
      thumbUrl:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/thumbs/file-manager_tn.jpg",
      size: "1 Mb"
    },
    {
      id: "tunisia",
      name: "Tunisia",
      type: "file",
      extension: "jpg",
      url:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/tunisia.jpg",
      thumbUrl:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/thumbs/tunisia_tn.jpg",
      size: "250 Kb"
    },
    {
      id: "photo-tonka",
      name: "hd photo tonka",
      type: "file",
      extension: "jpg",
      url:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/photo-tonka.jpeg",
      thumbUrl:
        "https://task-master-cloud.s3.ap-northeast-2.amazonaws.com/images/thumbs/photo-tonka_tn.jpg",
      size: "250 Kb"
    }
  ],
  currentFile: null
};

const storageReducer = (state = initialState, action) => {
  if (action.type === SELECT_FILE) {
    if (!action.payload) return { ...state, ...{ currentFile: null } };

    const fileId = action.payload;
    const file = state.files.find(f => f.id === fileId);

    return { ...state, ...{ currentFile: file } };
  }

  // if (action.type === DRIVE_LOADED) {
  //   return { ...state, ...{ files: action.payload } };
  // }

  return state;
};

export default storageReducer;
