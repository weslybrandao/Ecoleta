import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from  '../pages/Home';
import CreatePoint from  '../pages/CreatePoint';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/create-point" component={CreatePoint} />
  </Switch>
)

export default Routes;