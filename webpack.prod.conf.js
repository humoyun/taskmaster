const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const Dotenv = require("dotenv-webpack");

// App directory
const appDirectory = fs.realpathSync(process.cwd());

const paths = {
  appPublic: "public",
  appBuild: "build"
};

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const prodConf = {
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
    // publicPath:
    //   process.env.NODE_ENV === "production"
    //     ? config.build.assetsPublicPath
    //     : config.dev.assetsPublicPath
  },

  mode: "production",

  devtool: "cheap-module-source-map",

  devServer: {
    contentBase: "./build"
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: "public/assets", to: "assets" },
      { from: "public", to: "", ignore: ["index.html", "assets/**"] }
    ])
  ]

  // plugins: [
  //   new Dotenv({
  //     path: "./.env.production"
  //   })
  // ]
};

module.exports = merge(baseWebpackConf, prodConf);

// build = {
//   static: {
//     js: [],
//     css: [],
//     assets: []
//   },
//   _redirects: "",
//   favicon: ""
// };
