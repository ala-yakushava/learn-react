import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';
import DefaultHeader from './components/DefaultHeader';
import PageNotFound from './components/PageNotFound';

const RouterComponent = () => (
  <Router>
    <Switch>
      <Redirect from="/" to="/movies" exact />
      <Route path="/movies">
        <App>
          <Switch>
            <Route path="/movies" exact component={DefaultHeader} />
            <Route path="/movies/:id" component={Header} />
          </Switch>
        </App>
      </Route>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default RouterComponent;
