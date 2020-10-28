const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.jsx',
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader', 'postcss-loader', 'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin('styles.css'),
  ].filter(Boolean),
});
