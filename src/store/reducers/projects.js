import { ADD_PROJECT, REMOVE_PROJECT } from '../types';

const initialState = [
  {
    id: Math.random().toString(26).slice(2), 
    status: 'ongoing',
    title: 'App Development',
    companyName: 'PRIDE SOFTWARES',
    desc: 'These events are useful in that they allow us to solve', 
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date()
  },
  {
    id: Math.random().toString(26).slice(2), 
    status: 'ongoing',
    title: 'Website Redesign',
    companyName: 'ENIGMA NAVIGATION',
    desc: 'simple tasks easily. For instance, they allow us to handle ', 
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date()
  },
  {
    id: Math.random().toString(26).slice(2), 
    status: 'ongoing',
    title: 'New Admin Design',
    companyName: 'MOONDUST SOFTWARES',
    desc: 'the drag’n’drop of “external” files into the browser, so we can take',
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date()
  },
  {
    id: Math.random().toString(26).slice(2), 
    status: 'ongoing',
    title: 'Microservices',
    companyName: 'ROSE TECHNOLOGIES',
    desc: 'a file in the OS file-manager and drop it into the browser window, thereby giving JavaScript access to its contents.', 
    tasks: [],
    comments: [],
    partcipants: [],
    numOfTasks: 34,
    numOfComments: 61,
    createdAt: new Date(),
    dueAt: new Date()
  }
]

function projectsReducer (state = initialState, action) {
  if (action.type === ADD_PROJECT) {
    // state.projects.push(action.payload); wrong approach (mutable, changing in place)
    return Object.assign({}, state, { 
      projects: state.concat(action.payload)
      // projects: [...state, action.payload] (second way)
    });
  }


  if (action.type === REMOVE_PROJECT) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);
    
    return Object.assign({}, state, {
      projects: [...state.slice(0, index), ...state.slice(index+1)] 
      // projects: [...state, action.payload] (second way)
    });
  }

  return state;
}

export default projectsReducer;