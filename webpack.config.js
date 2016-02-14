module.exports = {
  entry: "./test/test.jsx",
  output: {
    path: __dirname,
    filename: "./test/test.js",
    sourceMapFilename: "./test/test.js.map"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  }
};
