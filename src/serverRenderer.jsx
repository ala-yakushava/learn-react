import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import configureStore from './slices/configureStore';
import App from './App';

function renderHTML(html, preloadedState) {
  return `
    <!DOCTYPE html>
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
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const context = {};

    const renderRoot = () => (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
