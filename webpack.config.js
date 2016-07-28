
module.exports = {
  entry: "./src/App.js", //point to dev our code
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: "node_modules",
        query: {
          presets:['react']
        }
      }
    ]
  }
}
