import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.min.css";
import actions from "./user/redux/actions";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// To create store which takes one argument as reducer and compulsory which is
// a javascript function and other argruments which are for middlewares
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const token = window.localStorage.getItem("token");
if (token) {
  const user = jwtDecode(token);
  store.dispatch({
    type: actions.LOAD_CURRENT_ACCOUNT,
    payload: user
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
