import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './user/containers/Signup';
import { connect } from 'react-redux';
import Login from './user/containers/Login';
import TodoList from './todo/containers/TodoList';


const publicRoutes = [
  {
    path:"/user/signup",
    component:Signup
  },
  {
    path:"/user/login",
    component:Login
  }
]

const privateRoutes = [
  {
    path:"/",
    component:TodoList
  }
]


class App extends Component {
  render() {
    console.log("routes users", this.props.user)
    return (
      <Router>
        <Switch>
          <Route path="/" component={TodoList} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
   return {
     user:store.user
   }
} 

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, {})(App);
