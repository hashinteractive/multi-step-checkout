const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.js'),
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'client/src'),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": {
                  "node": "10"
                }
              }],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        include: [
          path.resolve(__dirname, "client")
        ],
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          { 
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    clientLogLevel: 'silent',
    contentBase: './client/dist',
    hot: true,
  },
}