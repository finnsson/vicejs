module.exports = {
  entry: "./test/test.jsx",
  output: {
    path: __dirname,
    filename: "./test/tmp.js",
    sourceMapFilename: "[file].map"
  },
  // devtool: 'source-map',
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }
  ]
}
};
