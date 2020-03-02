// import axios from "common/api";
// import setAuthorizationHeader from "common/setAuthorizationHeader";
// import jwtDecode from "jwt-decode";

// import store from "store"; // only use for axios interceptors
// import { notesLogout } from "store/actions/notesActions"; // only use for axios interceptors logout
// import history from "router/history"; // only use for axios interceptors logout
// import { createActions } from "redux-actions";
import { message } from "antd";
import { SET_USER, SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from "../types";
import myCookie from "@/common/myCookie";

export const setAccessToken = accessToken => {
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken
  };
};

export const setRefreshToken = refreshToken => {
  return {
    type: SET_REFRESH_TOKEN,
    payload: refreshToken
  };
};

export const setUser = data => {
  return {
    type: SET_USER,
    payload: data
  };
};

// import config from "config";
// import axiosins from "axios.instance";
// import { cLog, cError } from "helper/console";
// import * as acttype from "constant/action";

// const actions = createActions("REQUEST", "SUCCESS", "FAILURE", "SIGNOUT", {
//   prefix: "AUTH",
//   namespace: "/"
// });

export const login = data => {
  return async dispatch => {
    try {
      const result = await authenticate(data);
      const { user, tokens } = result;

      dispatch(setUser(user));
      dispatch(setAccessToken(tokens.access_token));
      dispatch(setRefreshToken(tokens.refresh_token));

      myCookie.setToken(tokens.access_token);
      myCookie.setRefreshToken(tokens.refresh_token);

      return Promise.resolve("user_issoyo");
    } catch (err) {
      message.error(err.msg);
      console.error(err);
    }
  };
};

/**
 * If you want to access the state inside the action creator
 * you can add getState in the parameter's list.
 */
export const logout = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setUser({}));
      dispatch(setAccessToken(null));
      dispatch(setRefreshToken(null));

      myCookie.clear();

      return Promise.resolve("user_issoyo");
    } catch (err) {
      console.error(err);
    }
  };
};

const tempUser = {
  username: "humoyun",
  email: "humoyun@gmail.com",
  location: "South Korea",
  role: "admin"
};

const tempTokens = {
  access_token: "temporary-auth_token-token",
  refresh_token: "temporary-refresh_token-token"
};

const authenticate = data => {
  return new Promise((resolve, reject) => {
    const username = "humoyun";
    const password = "qwe123";

    setTimeout(() => {
      if (username === data.username && password === data.password)
        resolve({ tokens: tempTokens, user: tempUser });
      else reject({ msg: "Username or password incorrect" });
    }, 1000);
  });
};

export const isLoggedIn = () => {};

export const signout = () => dispatch => {
  dispatch(actions.authSignout());
};
