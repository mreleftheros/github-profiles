const path = require("path");

module.exports = {
  entry: ['babel-regenerator-runtime', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/assets/",
    filename: "./assets/bundle.js"
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};