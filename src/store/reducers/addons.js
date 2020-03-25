import { ADD_ADDON, ADDONS_LOADED, CLEAR_ADDONS } from "../types";

const initialState = [];

export const addonsSelector = state => {
  return state.addons;
};

function addonsReducer(state = initialState, action) {
  if (action.type === ADDONS_LOADED) {
    console.log("[] addonsReducer: ", action.payload);
    return [...state, ...action.payload];
  }

  if (action.type === CLEAR_ADDONS) {
    console.log("[] addonsReducer: ", action.payload);
    return [...action.payload];
  }

  return state;
}

export default addonsReducer;
