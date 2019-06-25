
import actions from '../redux/actions';

const intialState = {
  user:'',
}

export default (state=intialState, action) => {
  switch(action.type){
    case  actions.LOAD_CURRENT_ACCOUNT:
      return {...state, user:{...action.payload, authorized:true} }
    default:
      return state;
  }
}

