const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const Dotenv = require("dotenv-webpack");

// style files regexes
const styleRegex = {
  css: /\.css$/i,
  cssModule: /\.module\.css$/,
  less: /\.less$/,
  lessModule: /\.module\.less$/
};

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// const paths = {
//   appPublic: "public",
//   appBuild: "build"
// };

// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml
//   });
// }

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const prodConf = {
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "static/app.[hash:8].js",
    chunkFilename: "static/[id].[chunkhash:8].js"
    // publicPath:
    //   process.env.NODE_ENV === "production"
    //     ? config.build.assetsPublicPath
    //     : config.dev.assetsPublicPath
  },

  mode: "production",

  devtool: "cheap-module-source-map",

  module: {
    rules: [
      {
        test: styleRegex.css,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: styleRegex.less,
        use: [
          MiniCssExtractPlugin.loader,
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
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: "public/assets", to: "assets" },
      { from: "public", to: "", ignore: ["index.html", "assets/**"] }
    ]),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/[name].[hash:8].css",
      chunkFilename: "static/[id][hash:8].css"
    })
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
