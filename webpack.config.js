const merge = require('webpack-merge');
const webpackCommon = require('./config/webpack/common.js');
const dev = require('./config/webpack/dev');
const prod = require('./config/webpack/prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(webpackCommon, prod);
} else {
  module.exports = merge(webpackCommon, dev);
}