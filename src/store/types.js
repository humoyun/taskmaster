/**
 * action types
 */
export const ADD_TODO = "todo:add";
export const REMOVE_TODO = "todo:remove";
export const EDIT_TODO = "todo:edit";
export const TODO_CHECKED = "todo:checked";
export const DATA_LOADED = "todo:loaded";

/**
 * validation types
 */
export const EMPTY_TODO = "todo:empty";

/**
 *
 */
export const PROJECT_LOADED = "project:loadedOne";
export const PROJECTS_LOADED = "project:loadedMany";
export const ADD_PROJECT = "project:add";
export const EDIT_PROJECT = "project:editMode";
export const REMOVE_PROJECT = "project:remove";
export const UPDATE_PROJECT = "project:update";
export const CLEAR_PROJECTS = "project:clearAll";

/**
 *
 */
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const ASSIGN_TASK = "ASSIGN_TASK";

/**
 *
 */
export const ADD_USER = "user:add";
export const REMOVE_USER = "user:remove";
export const UPDATE_USER = "user:update";

/**
 *
 */
export const ADD_SPRINT = "sprints:add";
export const REMOVE_SPRINT = "sprints:remove";
export const UPDATE_SPRINT = "sprints:update";

/**
 *
 */
export const ADD_TEAM = "teams:add";
export const REMOVE_TEAM = "teams:remove";
export const UPDATE_TEAM = "teams:update";

/**
 *
 */
export const SET_USER_AND_TOKENS = "user:setUserAndTokens";
export const SET_USER = "auth:setUser";
export const SET_ACCESS_TOKEN = "auth:setAccessToken";
export const SET_REFRESH_TOKEN = "auth:setRefreshToken";
export const USER_INFO_LOADED = "auth:userInfoLoaded";

/**
 *
 */
export const ADD_ADDON = "addon:add";
export const ADDONS_LOADED = "addon:loaded";
export const CLEAR_ADDONS = "addon:clear";

/**
 *
 */
export const SELECT_FILE = "drive:selectFile";
export const DRIVE_LOADED = "drive:filesLoaded";

/**
 *
 */
export const ADD_EVENT = "event:add";
export const REMOVE_EVENT = "event:remove";

/**
 * global events
 */
export const SIDEBAR_MENU_CLICKED = "sidebar:menuItemDisabled";
