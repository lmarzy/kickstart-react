const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  }
};