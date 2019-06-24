import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './user/containers/Signup';
import Login from './user/containers/Login';

function App() {
  return (
    // <div>Hello</div>
    <Router>
      <Switch>
        <Route path="/user/signup" component={Signup}/>
        <Route path="/user/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
