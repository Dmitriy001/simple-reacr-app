const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      }
    ],
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    https: false,
    port: 8080,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple React App',
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin({}),
  ],
};
