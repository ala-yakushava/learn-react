import { configureStore } from '@reduxjs/toolkit';

import reducer from './index';

export default (preloadedState) => {
  const store = configureStore({
    reducer,
    preloadedState,
  });

  return store;
};
