// src/js/store/index.js
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import projectsReducer from "./reducers/projects";
import tasksReducer from "./reducers/tasks";
import addonsReducer from "./reducers/addons";
import teamsReducer from "./reducers/teams";
import storageReducer from "./reducers/storage";
import authReducer from "./reducers/auth";
import { isEmpty } from "./middlewares";
import thunk from "redux-thunk";

const middlewares = [isEmpty, thunk];
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  projects: projectsReducer,
  auth: authReducer,
  tasks: tasksReducer,
  addons: addonsReducer,
  teams: teamsReducer,
  drive: storageReducer
});

// TODO: define all selectors

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middlewares))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
