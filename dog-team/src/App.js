import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import DogDetail from './pages/DogDetail';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dog/:id' component={DogDetail} />
        <Route exact path='/team' component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
