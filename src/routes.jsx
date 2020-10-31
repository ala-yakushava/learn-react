import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from './components/Header';
import DefaultHeader from './components/DefaultHeader';

const Main = loadable(() => import('./components/Main'));
const PageNotFound = loadable(() => import('./components/PageNotFound'));

const RouterComponent = () => (
  <Switch>
    <Redirect from="/" to="/movies" exact />
    <Route path="/movies">
      <Main>
        <Switch>
          <Route path="/movies" exact component={DefaultHeader} />
          <Route path="/movies/:id" component={Header} />
        </Switch>
      </Main>
    </Route>
    <Route path="*" component={PageNotFound} />
  </Switch>
);

export default RouterComponent;
