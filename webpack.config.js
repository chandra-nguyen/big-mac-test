module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};