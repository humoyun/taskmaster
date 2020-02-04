// src/js/store/index.js
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import todosReducer from "./reducers/todos";
import projectsReducer from "./reducers/projects";
import tasksReducer from "./reducers/tasks";
import usersReducer from "./reducers/users";
import { isEmpty } from './middleware';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  todos: todosReducer, 
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