import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import Alert from './components/Alert';
import AlertState from './context/AlertState';

function App() {
  return (
    <AlertState>
      <Router>
        <div>
          <Alert />
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </AlertState>
  );
}

export default App;
