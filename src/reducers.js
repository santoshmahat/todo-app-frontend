import { combineReducers } from 'redux';
import userReducer from './user/redux/reducers';


const rootReducers = combineReducers({
  user:userReducer,
  todo:""
})
export default rootReducers;

