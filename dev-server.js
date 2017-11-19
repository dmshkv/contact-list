const webpack = require('webpack');
const webpackValidator = require('webpack-validator');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config');
const baseConfig = require('./config/base');

// HMR
webpackConfig.entry = [
  `webpack-dev-server/client?http://localhost:${baseConfig.devServerPort}`,
  ...webpackConfig.entry
];

const server = new WebpackDevServer(
    webpack(webpackValidator(webpackConfig)),
    {
        historyApiFallback: true,
        stats: {
          colors: true
        },
        proxy: {
            '/api': {
                target: baseConfig.apiServerUrl,
                secure: false,
                pathRewrite: function(path) {
                  return path.replace(/^\/api/, '');
                }
            }
        }
    }
);

server.listen(baseConfig.devServerPort, err => {
    if (err) {
        console.log(err);
    }

    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`Listening at localhost: ${baseConfig.devServerPort}`);
});
