const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const Visualizer = require("webpack-visualizer-plugin");

// style files regexes
const cssRegex = /\.css$/i;
const cssModuleRegex = /\.module\.css$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];
  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  // output: {
  //   // `filename` provides a template for naming your bundles (remember to use `[name]`)
  //   filename: "[name].bundle.js",
  //   // `chunkFilename` provides a template for naming code-split bundles (optional)
  //   chunkFilename: "[name].bundle.js",
  //   // `path` is the folder where Webpack will place your bundles
  //   path: "./dist",
  //   // `publicPath` is where Webpack will load your bundles from (optional)
  //   publicPath: "dist/"
  // },

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // diffeerent for prod
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
    // publicPath:
    //   process.env.NODE_ENV === "production"
    //     ? config.build.assetsPublicPath
    //     : config.dev.assetsPublicPath
  },

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", "json"],
    alias: {
      "@": resolveAppPath("src")
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/favicon.ico"),
      title: "Task Master"
    }),
    new WebpackBundleAnalyzer({
      analyzerMode: "static",
      reportFilename: "./reports/report.html",
      openAnalyzer: false
    }),
    new Visualizer()
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true
                  }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
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
