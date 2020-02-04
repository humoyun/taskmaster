import { ADD_TODO, EMPTY_TODO } from '../types';

export function isEmpty({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_TODO) {
        const { title, body } = action.payload;

        if(title === '' || body === '') return dispatch({ type: EMPTY_TODO })
      }

      // Very important. If you forget to return next(action) the application will stop, 
      // and no other action will reach the reducer.
      return next(action);
    }
  }
};

export function logger({ dispatch }) {
  return function(next) {
    return function(action) {
      console.log(`[ log : ${action.type} ]` );

      return next(action);
    } 
  }
}