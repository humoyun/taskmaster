import { REMOVE_USER } from "../types";

const initialState = [
  {
    projectId: "project-1",
    id: "sprint-id-1",
    name: "Project title: Sprint 1",
    taskList: []
  },
  {
    projectId: "project-1",
    id: "sprint-id-2",
    name: "Project title: Sprint 2",
    taskList: [
      { id: "sprint2-task-1", name: "Editor buttons not responsive" },
      { id: "sprint2-task-2", name: "Viewer header update " }
    ]
  },
  {
    projectId: "project-1",
    id: "sprint-id-3",
    name: "Project title: Sprint 3",
    taskList: [
      { id: "sprint3-task-1", name: "Editor control icons update" },
      { id: "sprint3-task-2", name: "Dashboard project card issue" },
      { id: "sprint3-task-3", name: "Firefox touch support" }
    ]
  },
  {
    projectId: "project-1",
    id: "sprint-id-4",
    name: "Project title: Sprint 4",
    taskList: []
  }
];

function sprintsReducer(state = initialState, action) {
  if (action.type === GET_SPRINTS_BY_PID) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);

    return Object.assign({}, state, {
      users: [...state.slice(0, index), ...state.slice(index + 1)]
      // users: [...state, action.payload] (second way)
    });
  }

  return state;
}

const getSprintsByProjectId = (state, projectId) => {
  const sprints = state.filter(sprint => sprint.projectId === projectId);
  return sprints;
};

export default sprintsReducer;
