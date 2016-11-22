import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Mobile from './components/Mobile';
import DTH from './components/Dth';
import Dashboard from './components/Dashboard';
import Test from './components/Test';

export default (
    <Route component={App}>
    <Route path='/' component={Mobile}></Route>
    <Route path='/dth' component={DTH}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
    <Route path='/checkout' component={Test}></Route>
  </Route>
);
