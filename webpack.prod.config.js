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
  mode: "production",
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
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
  }
};
