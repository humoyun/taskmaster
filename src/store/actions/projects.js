import {
  ADD_PROJECT,
  CLEAR_PROJECTS,
  EDIT_PROJECT,
  PROJECTS_LOADED,
  PROJECT_LOADED
} from "../types";
import api from "@/common/api";

// Pure Actions

// Mutations
export function clearProjects() {
  return { type: CLEAR_PROJECTS, payload: [] };
}

export function addProject(payload) {
  return { type: ADD_PROJECT, payload };
}

export function editProject(payload) {
  return { type: EDIT_PROJECT, payload };
}

/**
 ************************* API CALLS *************************
 */

/**
 *
 * @param {*} pid
 */

export const getProject = pid => {
  return async (dispatch, getState) => {
    try {
      const project = await api(`/projects/${pid}`);
      if (project.data) {
        dispatch({
          type: PROJECT_LOADED,
          payload: project.data
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const getProjects = () => {
  return async (dispatch, getState) => {
    try {
      const projects = await api.get("/projects");
      console.log("herokue projects : ", projects);
      if (projects.data) {
        await dispatch({
          type: PROJECTS_LOADED,
          payload: projects.data
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
};
