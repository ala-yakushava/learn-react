const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackConfig = require('../webpack');

const app = express();
const compiler = webpack(webpackConfig);

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find((c) => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  // eslint-disable-next-line
  const serverRenderer = require('../public/js/serverRenderer').default;
  app.use(express.static('public'));
  app.use(serverRenderer());
}

module.exports = app;
