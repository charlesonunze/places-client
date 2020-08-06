import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Layout from './containers/Layout';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Layout } />
    </Switch>
  );
}

export default App;
