import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './user/containers/Signup';

function App() {
  return (
    // <div>Hello</div>
    <Router>
      <Switch>
        <Route path="/user/signup" component={Signup}/>
      </Switch>
    </Router>
  );
}

export default App;
