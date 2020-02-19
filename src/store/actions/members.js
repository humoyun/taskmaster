import axios from "common/api";
import setAuthorizationHeader from "common/setAuthorizationHeader";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import store from "store"; // only use for axios interceptors
import { notesLogout } from "store/actions/notesActions"; // only use for axios interceptors logout
import history from "router/history"; // only use for axios interceptors logout

export const SET_MEMBERS = "member/setMembers";
export const SET_MEMBER = "member/setMember";
export const ADD_MEMBER = "member/addMember";
export const UPDATE_MEMBER = "member/updateMember";
