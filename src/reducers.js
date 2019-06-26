import { combineReducers } from 'redux';
import userReducer from './user/redux/reducers';
import todoReducer from './todo/redux/reducers';


const rootReducers = combineReducers({
  user:userReducer,
  todo:todoReducer,
  
})
export default rootReducers;

