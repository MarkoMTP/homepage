const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html'
  })],
  resolve: {
    fallback: {
      "path": false,
      "util": false,
      "url": false,
      "https": false,
      "http": false,
      "vm": false,
      "zlib": false,
      "buffer": false,
      "stream": false,
      "crypto": false
    }
  },
  mode: 'development',
};
