import actions from './actions';

const initialState = { 
  todos:[]
}

export default (state=initialState, action) => {
  switch(action.type){
    case actions.FETCH_TODO_LIST:
      return {...state, todos:action.payload }
    default: 
      return state;
  }
}