// src/js/store/index.js
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import projectsReducer from "./reducers/projects";
import tasksReducer from "./reducers/tasks";
import usersReducer from "./reducers/users";
import { isEmpty } from './middlewares';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
  users: usersReducer
})

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(isEmpty))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;