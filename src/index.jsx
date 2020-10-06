import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './style.scss';
import reducer from './slices';
import RouterComponent from './routes';

const store = configureStore({ reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-root'),
);
