const webpack = require("webpack");

// style files regexes
const cssRegex = /\.css$/i;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
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

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    contentBase: "./public",
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    // Use 'ws' instead of 'sockjs-node' on server since we're using native
    // websockets in `webpackHotDevClient`.
    // transportMode: "ws",
    hot: true,
    port: 8118
  }
};
