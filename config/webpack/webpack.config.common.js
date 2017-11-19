const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForceCaseSensitivityWebpackPlugin = require('force-case-sensitivity-webpack-plugin');
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');

const baseConfig = require('../base');
const postcssConfig = require('../postcss/postcss.config');

module.exports = {
  context: baseConfig.path.src,
  resolve: {
    root: baseConfig.path.src,
  },
  entry: [
      'index.js'
  ],
  output: {
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: [
          baseConfig.path.src
        ]
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: [
          baseConfig.path.src
        ],
        loaders: [
          'babel-loader?extends=' + baseConfig.babel.configPath
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: 'body',
      hash: false
    }),
    new ForceCaseSensitivityWebpackPlugin(),
    new StyleLintWebpackPlugin({
      configFile: baseConfig.stylelint.configPath,
      files: [
        '**/*.css'
      ]
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  eslint: {
    configFile: baseConfig.eslint.configPath
  },
  postcss: postcssConfig
};
