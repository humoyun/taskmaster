import { SELECT_FILE, DRIVE_LOADED } from "../types";

const initialState = {
  files: [],
  currentFile: null,
};

const storageReducer = (state = initialState, action) => {
  if (action.type === SELECT_FILE) {
    if (!action.payload) return { ...state, ...{ currentFile: null } };

    const fileId = action.payload;
    const file = state.files.find((f) => f.id === fileId);

    return { ...state, ...{ currentFile: file } };
  }

  if (action.type === DRIVE_LOADED) {
    return { ...state, ...{ files: action.payload } };
  }

  return state;
};

export default storageReducer;
