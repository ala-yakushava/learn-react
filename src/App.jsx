import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import './style.scss';
import RouterComponent from './routes';

const App = ({
  Router, location, store,
}) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router location={location}>
        <RouterComponent />
      </Router>
    </Provider>
  </React.StrictMode>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};
App.defaultProps = {
  location: null,
};

export default hot(module)(App);
