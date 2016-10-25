
var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    style: './src/assets/main.css',
    main: './src/main'
  },
  output: {
    path: 'build/',
    filename: '[name].[hash:8].js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })},
      {test: /\.js$/, loader: 'babel'},
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash:8].css'),
    function() {
      this.plugin("done", function(stats) {
        var content = JSON.stringify(stats.toJson().assetsByChunkName);
        return fs.writeFileSync('build/assets.json', content);
      });
    }
  ]
};
