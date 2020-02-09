const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const fs = require("fs");

const baseWebpackConf = require("./webpack.base.conf");

const devConf = {
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   // inject: true,
    //   // template: path.resolve(__dirname, "public/index.html"),
    //   title: "Development"
    // })
  ],

  devServer: {
    contentBase: "./public",
    // Public path is root of content base
    publicPath: "/",
    historyApiFallback: true,
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    /**
     * Use 'ws' instead of 'sockjs-node' on server since we're
     * using native websockets in `webpackHotDevClient`.
     */

    // transportMode: "ws",

    hot: true,
    port: 8118
  }
};

module.exports = merge(baseWebpackConf, devConf);
