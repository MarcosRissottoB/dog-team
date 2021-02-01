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
import ErrorBoundary from './components/errorBoundary'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route 
            exact
            path='/'
            render={() => (
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            )}
          />
          <Route
            exact
            path='/dog/:id'
            render={() => (
              <ErrorBoundary>
                <DogDetail />
              </ErrorBoundary>
            )}
          />
          <Route
            exact
            path='/team/:id?'
            render={() => (
              <ErrorBoundary>
                <Team />
              </ErrorBoundary>
            )}
          />
          <Route
            render={() => (
              <ErrorBoundary>
                <NotFound />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
