import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import Home from './pages/Home';
import DogDetail from './pages/DogDetail';
import Team from './pages/Team';
import NotFound from './pages/NotFound';

// Components
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/dog/:id' component={DogDetail} />
          <Route exact path='/team' component={Team} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
