import { SELECT_FILE } from "../types";

export const selectFile = id => ({
  type: SELECT_FILE,
  payload: id
});
