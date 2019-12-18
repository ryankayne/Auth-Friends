import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import Login from './component/Login';
import PrivateRoute from './component/PrivateRoute';
import Friends from './component/Friends';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/Login">Login</Link>
          <Link to="/Friends">Friends</Link>

          <Switch>
            <Route path="/Login" component={ Login } />
            <PrivateRoute path="/Friends" component={ Friends } />
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
