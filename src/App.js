import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeNavBar from './components/HomeNavBar';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ HomeNavBar } />

      <Route path="/not-found" component={ NotFound } />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
