
var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    style: './src/main.css',
    main: './src/main.coffee'
  },
  output: {
    path: 'build/',
    filename: '[name].[hash:8].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel'},
    ]
  },
  resolve: {
    extensions: ['', '.vue', '.js']
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash:8].css'), function() {
      return this.plugin("done", function(stats) {
        var content;
        content = JSON.stringify(stats.toJson().assetsByChunkName);
        return fs.writeFileSync('build/assets.json', content);
      });
    }
  ]
};
