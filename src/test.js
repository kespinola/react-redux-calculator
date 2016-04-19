require('babel-polyfill');
const context = require.context('.', true, /.+\.test\.js?$/);
context.keys().forEach(context);
export default context;
