const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// style files regexes
const cssRegex = /\.css$/i;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "public"),
    // publicPath: "./",
    filename: "bundle.js"
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // cacheDirectory: true,
            // cacheCompression: false
            // envName: isProduction ? "production" : "development"
          }
        }
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      },
      {
        test: cssRegex,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
            // options: {
            //   sourceMap: true,
            //   modules: true,
            //   localIdentName: "[local]___[hash:base64:5]"
            // }
          },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.(png|png)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.resolve(__dirname, "public/index.html"),
    //   filename: "./index.html",
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
