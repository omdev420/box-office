import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is home page
      </Route>
      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>404 NOT FOUND!!</Route>
    </Switch>
  );
}

export default App;
