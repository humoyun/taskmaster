import {
  ADD_PROJECT,
  ADD_PROJECTS,
  REMOVE_PROJECT,
  EDIT_PROJECT,
  PROJECT_LOADED
} from "../types";
import axios from "axios";

export function getProject() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then(json => {
      return { type: DATA_LOADED, payload: json };
    });
}

export const getProjects = () => {
  return async (dispatch, getState) => {
    try {
      const rs = axios.get("https://jsonplaceholder.typicode.com/posts");
      if (rs) {
        // await dispatch({
        //   type: ADD_PROJECTS,
        //   payload: rs.data
        // });
        const prom = new Promise((resolve, reject) => {
          setTimeout(() => resolve(["from promise"]), 1000);
        });

        const data = await prom();
        console.log("projects data: ", data);
        dispatch({
          type: ADD_PROJECTS,
          payload: data
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
