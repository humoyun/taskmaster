import {
  SET_USER_AND_TOKENS,
  SET_USER,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN
} from "../types";

const initialState = [
  {
    user: null,
    accessToken: null,
    refreshToken: null
  }
];

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_AND_TOKENS:
      return {
        ...state,
        ...action.payload
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload
      };

    case SET_REFRESH_TOKEN:
      return {
        ...state,
        refreshToken: action.payload
      };

    default:
      return state;
  }
}

export default authReducer;
