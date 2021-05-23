const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const mode = process.env.mode;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
  },
  resolve: {
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  devtool: (
    mode == 'development' ? 'eval-source-map' : 'eval'
  ),
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: { minimize: true },
        }],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    writeToDisk: false,
    hot: true,
    host: '0.0.0.0',
  }
}
