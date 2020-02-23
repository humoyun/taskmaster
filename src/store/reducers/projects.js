import { ADD_PROJECT, REMOVE_PROJECT } from "../types";

const initialState = [
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    status: "ongoing",
    title: "App Development",
    teamName: "PRIDE SOFTWARES",
    desc: "These events are useful in that they allow us to solve",
    members: ["user-1", "user-2"],
    backlog: [
      "backlog-task-1",
      "backlog-task-2",
      "backlog-task-4",
      "backlog-task-11",
      "backlog-task-22",
      "backlog-task-14"
    ],
    sprints: ["sprint-1", "sprint-2"],
    comments: [
      "comment-1",
      "comment-2",
      "comment-4",
      "comment-5",
      "comment-7",
      "comment-9"
    ],
    createdAt: new Date(),
    dueAt: new Date(),
    state: "Completed",
    color: "blue"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    status: "ongoing",
    title: "Website Redesign",
    teamName: "ENIGMA NAVIGATION",
    desc: "Simple tasks easily. For instance, they allow us to handle",
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "Created",
    color: "gold"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    status: "ongoing",
    title: "New Admin Design",
    teamName: "MOONDUST SOFTWARES",
    desc:
      "The drag and drop of “external” files into the browser, so we can take",
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "In Progress",
    color: "green"
  },
  {
    id: Math.random()
      .toString(26)
      .slice(2),
    status: "ongoing",
    title: "Microservices",
    teamName: "ROSE TECHNOLOGIES",
    desc:
      "File in the OS file-manager and drop it into the browser window, thereby giving JavaScript access to its contents.",
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date(),
    state: "Completed",
    color: "blue"
  }
];

// state.projects.push(action.payload); wrong approach (mutable, changing in place)
const projectsReducer = (state = initialState, action) => {
  if (action.type === ADD_PROJECT) {
    return Object.assign({}, state, {
      projects: [...state, action.payload]
    });
  }

  if (action.type === REMOVE_PROJECT) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);

    return Object.assign({}, state, {
      projects: [...state.slice(0, index), ...state.slice(index + 1)]
      // projects: [...state, action.payload] (second way)
    });
  }

  return state;
};

export default projectsReducer;
