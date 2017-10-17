const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main/js/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['babel-plugin-transform-object-rest-spread']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/ressources/images'),
        to: path.resolve(__dirname, '../dist/images')
      },
      {
        from: path.resolve(__dirname, '../src/ressources/css'),
        to: path.resolve(__dirname, '../dist/css')
      },
      {
        from: path.resolve(__dirname, '../index.html'),
        to: path.resolve(__dirname, '../dist')
      }
    ])
  ]
};