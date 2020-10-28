import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import './style.scss';
import RouterComponent from './routes';

const App = ({
  Router, location, context, store,
}) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router location={location} context={context}>
        <RouterComponent />
      </Router>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(App);
