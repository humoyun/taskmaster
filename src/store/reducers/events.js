import { ADD_EVENT, REMOVE_EVENT } from "../types";

const uid = () =>
  Math.random()
    .toString(26)
    .slice(2, 10);

const initialState = [
  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "12-03-2020",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "09-03-2020",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "11-03-2020",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "",
    owner: "",
    priority: "primary",
    members: []
  },

  {
    id: `event-id-${uid()}`,
    name: "New theme release",
    color: "#1abc9c",
    date: "",
    owner: "",
    priority: "primary",
    members: []
  }
];

function eventsReducer(state = initialState, action) {
  if (action.type === ADD_EVENT) {
    return Object.assign({}, state, {
      teams: state.concat(action.payload)
    });
  }

  if (action.type === REMOVE_EVENT) {
    const index = state.findIndex(team => team.id === action.payload.id);

    return Object.assign({}, state, {
      teams: [...state.slice(0, index), ...state.slice(index + 1)]
    });
  }

  return state;
}

export default eventsReducer;
