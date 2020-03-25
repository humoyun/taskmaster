import {
  ADD_PROJECT,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  PROJECTS_LOADED,
  PROJECT_LOADED
} from "../types";
import axios from "axios";

const db = [
  {
    id: "project-1",
    title: "App Development",
    teamName: "PRIDE SOFTWARES",
    desc: "These events are useful in that they allow us to solve",
    members: ["user-1", "user-2"],
    backlog: [],
    sprints: ["sprint-id-1", "sprint-id-2"],
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "Completed",
    color: "blue",
    percent: 100 // should be resolvedTask/numOfTotalTasks * 109%
  },
  {
    id: "project-2",
    title: "Website Redesign",
    teamName: "ENIGMA NAVIGATION",
    desc: "Simple tasks easily. For instance, they allow us to handle",
    tasks: [],
    numOfComments: 22,
    members: ["user-1", "user-2", "user-3"],
    numOfTasks: 34,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "Created",
    color: "gold",
    percent: 0 // should be resolvedTask/numOfTotalTasks * 109%
  },
  {
    id: "project-3",
    status: "ongoing",
    title: "New Admin Design",
    teamName: "MOONDUST SOFTWARES",
    desc:
      "The drag and drop of “external” files into the browser, so we can take",
    tasks: [],
    numOfComments: 9,
    members: ["user-1", "user-2", "user-4", "user-8", "user-11"],
    numOfTasks: 34,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "In Progress",
    color: "green",
    percent: 34 // should be resolvedTask/numOfTotalTasks * 109%
  },
  {
    id: "project-4",
    status: "ongoing",
    title: "Microservices",
    teamName: "ROSE TECHNOLOGIES",
    desc:
      "File in the OS file-manager and drop it into the browser window, thereby giving JavaScript access to its contents.",
    tasks: [],
    numOfComments: 33,
    members: ["user-4", "user-6", "user-11"],
    numOfTasks: 34,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "In Progress",
    color: "green",
    percent: 78 // should be resolvedTask/numOfTotalTasks * 109%
  }
];

export function getProject(pid) {
  return (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(resp => resp.json())
      .then(json => {
        const project = db.find(p => p.id === pid);
        dispatch({
          type: PROJECT_LOADED,
          payload: project
        });
      });
  };
}

export const getProjects = () => {
  return async (dispatch, getState) => {
    try {
      const rs = axios.get("https://jsonplaceholder.typicode.com/posts");
      if (rs) {
        await dispatch({
          type: PROJECTS_LOADED,
          payload: db
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export function removeTodo(payload) {
  return { type: REMOVE_PROJECT, payload };
}

export function addTodo(payload) {
  return { type: ADD_PROJECT, payload };
}

export function done(payload) {
  return { type: TODO_CHECKED, payload };
}

export function editTodo(payload) {
  return { type: EDIT_PROJECT, payload };
}
