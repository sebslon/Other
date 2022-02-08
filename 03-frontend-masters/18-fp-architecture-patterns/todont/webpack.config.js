const path = require("path");
const webpack = require("webpack");

module.exports = (env) => ({
  mode: env === "production" ? "production" : "development",
  entry: {
    index: "./index.js",
  },
  output: {
    filename: "./[name].bundle.js",
    path: path.resolve(__dirname),
  },
  devServer: {
    contentBase: "./",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules(?!\/(@uxrd|salesforce))/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { chrome: "69" },
                  shippedProposals: true,
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
    ],
  },
  devtool: "cheap-module-source-map",
});
