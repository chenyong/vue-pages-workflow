
module.exports = {
  entry: {
    style: './src/main.css',
    main: './src/main.coffee'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel'}
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '']
  }
};
