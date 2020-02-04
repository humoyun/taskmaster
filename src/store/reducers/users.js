import { ADD_USER, REMOVE_USER } from '../types';

const initialState = [
  {
    id: Math.random().toString(26).slice(2), 
    username: 'mambo', 
    firstName: 'Ahmed', 
    secondName: 'Developer', 
    phone: "+10 234534542",
    website: 'https://3i.ai' 
  }
]

function usersReducer(state = initialState, action) {
  if (action.type === ADD_USER) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    return Object.assign({}, state, { 
      users: state.concat(action.payload)
      // users: [...state, action.payload] (second way)
    });
  }


  if (action.type === REMOVE_USER) {
    // state.push(action.payload); wrong approach (mutable, changing in place)
    const index = state.findIndex(todo => todo.id === action.payload.id);
    
    return Object.assign({}, state, {
      users: [...state.slice(0, index), ...state.slice(index+1)] 
      // users: [...state, action.payload] (second way)
    });
  }


  if (action.type === 'EMPTY_USER') {
    console.log(' **** empty todo cannot be added ****')
  }

  return state;
}

export default usersReducer;