import config from './webpack.config.test.js';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const { HOST, TEST_PORT } = process.env;

const compiler = webpack(config);

console.info('Testing server starting. Please wait...', HOST, TEST_PORT);

const server = new WebpackDevServer(compiler, {

  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  lazy: false,
  publicPath: `http://${HOST}:${TEST_PORT}/tests`,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
  },
});

server.listen(TEST_PORT, HOST);
