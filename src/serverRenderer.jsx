import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import qs from 'qs';

import configureStore from './slices/configureStore';
import { searchMovies } from './api';
import App from './App';

const renderHTML = (html, preloadedState) => (
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>React Server Side Rendering</title>
    </head>
    <body>
      <div id="app-root">${html}</div>
      <div id="modal-root"></div>
      <script>
        window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/js/main.js"></script>
    </body>
  </html>`
);

const serverRenderer = () => async (req, res) => {
  const store = configureStore();
  const params = qs.parse(req.query);
  const movies = await searchMovies(params.title, 'title');

  const renderRoot = () => (
    <App
      location={req.url}
      Router={StaticRouter}
      store={store}
    />
  );

  const htmlString = renderToString(renderRoot());
  const preloadedState = store.getState();

  const finishState = {
    ...preloadedState,
    moviesInfo: { movies },
  };

  res.send(renderHTML(htmlString, finishState));
};

export default serverRenderer;
