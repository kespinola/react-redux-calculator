const path = require('path');
const webpack = require('webpack');
require('dotenv').load();

const HOST = process.env.HOST;
const TEST_PORT = process.env.TEST_PORT;

module.exports = {

  context: path.join(__dirname, '/../../src'),

  entry: [
    `webpack-dev-server/client?http://${HOST}:${TEST_PORT}/`,
    'webpack/hot/dev-server',
    'mocha!./test.js',
  ],

  output: {
    filename: 'test.build.js',
    path: '/tests/',
    publicPath: `http://${HOST}:${TEST_PORT}/tests`,
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loaders: ['babel'],
      },
      {
        test: /(\.css)$/,
        loader: 'null',
      },
      {
        test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
        loader: 'null',
      },
      {
        test: /\.json$/,
        loader: 'null',
      },
      {
        test: /\.(woff|svg|eot|ttf|woff2)$/,
        loader: 'null',
      },
    ],
  },

  resolve: {
    modules: [
      'node_modules',
    ],

    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],

  },

  node: {
    process: true,
  },

  debug: true,

  devtool: 'eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

};
