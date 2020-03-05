import { ADD_TEAM, REMOVE_TEAM } from "../types";

const initialState = [
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "frontend",
    owner: "Ahmed",
    members: []
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "testers",
    owner: "Ahmed",
    members: []
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    title: "home projects",
    owner: "Ahmed",
    members: []
  }
];

function teamsReducer(state = initialState, action) {
  if (action.type === ADD_TEAM) {
    return Object.assign({}, state, {
      teams: state.concat(action.payload)
    });
  }

  if (action.type === REMOVE_TEAM) {
    const index = state.findIndex(team => team.id === action.payload.id);

    return Object.assign({}, state, {
      teams: [...state.slice(0, index), ...state.slice(index + 1)]
    });
  }

  return state;
}

export default teamsReducer;
