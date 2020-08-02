import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import NotFound from 'pages/NotFound';
import HomePage from 'pages/HomePage';
import UsersPage from 'users/pages/UsersPage';
import PlacesPage from 'places/pages/PlacesPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/users" exact component={ UsersPage } />
      <Route path="/username/places" exact component={ PlacesPage } />

      <Route path="/not-found" component={ NotFound } />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
