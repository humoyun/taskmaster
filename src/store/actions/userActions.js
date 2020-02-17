import axios from "common/api";
import setAuthorizationHeader from "common/setAuthorizationHeader";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import store from "store"; // only use for axios interceptors
import { notesLogout } from "store/actions/notesActions"; // only use for axios interceptors logout
import history from "router/history"; // only use for axios interceptors logout

export const SET_USER_AND_TOKENS = "user:setUserAndTokens";
export const SET_USER = "user:setUser";
export const SET_ACCESS_TOKEN = "user:setAccessToken";
export const SET_REFRESH_TOKEN = "user:setRefreshToken";
