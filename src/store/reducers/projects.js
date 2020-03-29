import { PROJECTS_LOADED, REMOVE_PROJECT, CLEAR_PROJECTS } from "../types";

const initialState = [];

// state.projects.push(action.payload); wrong approach (mutable, changing in place)
const projectsReducer = (state = initialState, action) => {
  console.log("projectsReducer: ", action);
  if (action.type === PROJECTS_LOADED) {
    return [...state, ...action.payload];
  }

  if (action.type === CLEAR_PROJECTS) {
    return [...action.payload];
  }

  if (action.type === REMOVE_PROJECT) {
    const index = state.findIndex(todo => todo.id === action.payload.id);
    if (index) return [...state.slice(0, index), ...state.slice(index + 1)];
  }

  return state;
};

export default projectsReducer;
