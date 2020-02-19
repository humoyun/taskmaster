import { ADD_PROJECT, REMOVE_PROJECT, EDIT_PROJECT, PROJECT_LOADED } from '../types';

export function getProject() {
  return fetch("https://jsonplaceholder.typicode.com/posts").
  then(resp => resp.json()).
  then(json => {
    return { type: DATA_LOADED, payload: json }
  })
}

export function getProjects(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).
  then(resp => resp.json()).
  then(json => {
    return { type: DATA_LOADED, payload: json }
  })
}

export function removeTodo(payload) {
  return { type: REMOVE_TODO, payload };
}

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function done(payload) {
  return { type: TODO_CHECKED, payload };
}

export function editTodo(payload) {
  return { type: EDIT_TODO, payload }
}