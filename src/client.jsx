import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './slices/configureStore';
import App from './App';

const store = configureStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('app-root'));
