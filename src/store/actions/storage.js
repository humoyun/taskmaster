import api from "@/common/api";
import { SELECT_FILE, DRIVE_LOADED } from "../types";
import { menuItemClicked } from "./global";

export const selectFile = id => ({
  type: SELECT_FILE,
  payload: id
});

/**
 * API CALLS
 */

export const getFiles = (offset = 0, limit = 20, query = "") => {
  return async (dispatch, getState) => {
    try {
      const files = await api.get("/files");
      if (files.data) {
        dispatch({
          type: DRIVE_LOADED,
          payload: files.data
        });
      }

      dispatch(menuItemClicked({ loading: false, menuItem: null }));
    } catch (err) {
      console.error(err);
    }
  };
};
