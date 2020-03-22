import { ADD_TEAM, REMOVE_TEAM } from "../types";

const initialState = [
  {
    id: "team-1",
    title: "frontend",
    owner: "mudin",
    created: "18-08-2018",
    members: [
      { id: "mudin-id", name: "mudin" },
      { id: "humoyun-id", name: "humoyun" }
    ],
    icon: "team-rowing"
  },
  {
    id: "team-2",
    title: "task force",
    owner: "humoyun",
    created: "20-12-2019",
    members: [
      { id: "farxod-id", name: "farxod" },
      { id: "humoyun-id", name: "humoyun" }
    ],
    icon: "team-rowing"
  },
  {
    id: "team-3",
    title: "legacy apps",
    owner: "sardor",
    created: "09-04-2016",
    members: [{ id: "sardor-id", name: "sardor" }],
    icon: "team-rowing"
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
