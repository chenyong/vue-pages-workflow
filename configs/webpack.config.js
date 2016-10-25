
module.exports = {
  entry: {
    main: './src/main'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel'}
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  }
};
