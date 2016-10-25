
var fs = require('fs');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: 'build/',
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {test: /\.vue$/, loader: 'vue',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
              })
          }
        }
      },
      {test: /\.js$/, loader: 'babel'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })},
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new ExtractTextPlugin('[name].[hash:8].css'),
    function() {
      this.plugin("done", function(stats) {
        var content = JSON.stringify(stats.toJson().assetsByChunkName);
        return fs.writeFileSync('build/assets.json', content);
      });
    }
  ]
};
