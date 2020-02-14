const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const Dotenv = require('dotenv-webpack');

// style files regexes
const cssRegex = /\.css$/i;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const prodConf = {
  mode: "production",
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: './.env.production',
    })
  ]
};

module.exports = merge(baseWebpackConf, prodConf);
