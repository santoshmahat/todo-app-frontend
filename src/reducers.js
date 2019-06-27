import { combineReducers } from "redux";
import userReducer from "./user/redux/reducers";
import todoReducer from "./todo/redux/reducers";
import { reducer as formReducer } from "redux-form";

const rootReducers = combineReducers({
  user: userReducer,
  todo: todoReducer,
  form: formReducer
});
export default rootReducers;
