import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Signup from "./user/containers/Signup";
import { connect } from "react-redux";
import Login from "./user/containers/Login";
import TodoList from "./todo/containers/TodoList";
import CreateTodo from "./todo/containers/CreateTodo";

const publicRoutes = [
  {
    path: "/user/signup",
    component: Signup
  },
  {
    path: "/user/login",
    component: Login
  }
];

const privateRoutes = [
  {
    path: "/",
    component: TodoList
  },
  {
    path: "/todo/add",
    component: CreateTodo
  }
];

class App extends Component {
  render() {
    const { authorized } = this.props.user.user;
    return (
      <Router>
        <Switch>
          {publicRoutes.map((publicRoute, index) => (
            <Route
              key={index}
              exact
              path={publicRoute.path}
              component={publicRoute.component}
            />
          ))}
          {privateRoutes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              exact
              path={path}
              render={props => {
                if (authorized) {
                  return <Component {...props} />;
                } else {
                  return <Redirect to="/user/login" />;
                }
              }}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
