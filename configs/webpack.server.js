
var webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: {
    container: './src/app.js'
  },
  output: {
    path: 'build/',
    filename: 'app.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue', options: {}},
      {test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  resolve: {
    extensions: ['', '.vue', '.js']
  },
  babel: {
    presets: ['es2015']
  },
  plugins: []
};
