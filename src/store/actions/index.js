import { ADD_TODO, REMOVE_TODO, EDIT_TODO, DATA_LOADED, TODO_CHECKED } from '../types';

export function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/posts").
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