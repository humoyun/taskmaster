import { PROJECTS_LOADED, REMOVE_PROJECT } from "../types";

const initialState = [];

// state.projects.push(action.payload); wrong approach (mutable, changing in place)
const projectsReducer = (state = initialState, action) => {
  console.log("projectsReducer: ", action);
  if (action.type === PROJECTS_LOADED) {
    Object.assign(state, action.payload);
    console.log("=>> projectsReducer", state);
    return state;
  }

  if (action.type === REMOVE_PROJECT) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);

    return Object.assign({}, state, {
      projects: [...state.slice(0, index), ...state.slice(index + 1)]
      // projects: [...state, action.payload] (second way)
    });
  }

  return state;
};

export default projectsReducer;
