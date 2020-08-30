const HtmlWebPackPlugin = require('html-webpack-plugin');

console.log(process.env.NODE_ENV);

module.exports = {
  entry: [
    `${__dirname}/src/index.jsx`,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
