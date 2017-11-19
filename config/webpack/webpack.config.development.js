const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackValidator = require('webpack-validator');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonWebpackConfig = require('./webpack.config.common');
const baseConfig = require('../base');

const fontLoader = `url-loader?limit=1&name=${baseConfig.asset.font.urlLoaderPath}/[name]-[hash:base64:5].[ext]`;
const outputPath = `${baseConfig.path.dist}/dev`;

const webpackConfig = webpackMerge(commonWebpackConfig, {
  output: {
    path: outputPath,
  },
  module: {
    loaders: [
      // Styles
      {
        test: /\.css$/,
        include: [
          baseConfig.path.src
        ],
        loader: 'style-loader!css-loader?sourceMap&localIdentName=[name]---[local]---[hash:base64:5]&camelCase!postcss-loader'
      },
      // Images
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: [
          baseConfig.bootstrap.packagePath
        ],
        loader: `url-loader?limit=${baseConfig.asset.image.dataUriLimit}&name=${baseConfig.asset.image.urlLoaderPath}/[name]-[hash:base64:5].[ext]`
      },
      // Fonts
      {
        test: /\.svg$/,
        include: [
          baseConfig.bootstrap.packagePath
        ],
        loader: fontLoader
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        loader: fontLoader
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        outputPath,
        baseConfig.path.reports
      ],
      {
        root: baseConfig.path.root
      }
    ),
  ],
  devtool: 'source-map'
});

module.exports = webpackValidator(webpackConfig);
