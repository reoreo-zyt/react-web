/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PLUGINS = [
  new CopyWebpackPlugin({
    patterns: [{ from: "public/images", to: "./images" }],
  }),
  new CleanWebpackPlugin(),
];

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  plugins: PLUGINS,
});
