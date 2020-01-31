const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            // options: {
            //   sourceMap: true,
            //   modules: true,
            //   localIdentName: "[local]___[hash:base64:5]"
            // }
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dist',
    hot: true
  }
};