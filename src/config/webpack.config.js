const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../js/index.jsx')
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname,'dist'),
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:["@babel/preset-react"]
        },
      },
      {
        test: /\.(css|less)$/,
        loader: ['style-loader','css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new HtmlwebpackPlugin({
      title: "react App",
      filename: "index.html",
      template: path.resolve(__dirname, '../index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeAttributeQuotes: true
      }
    })
  ]
};