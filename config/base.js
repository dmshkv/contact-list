const {
  resolve,
  normalize
} = require('path');

const root = resolve(__dirname, '../');
const nodeModules = `${root}/node_modules`;

const webpackConfig = {
  path: {
    root: root,
    src: normalize(`${root}/src`),
    dist: normalize(`${root}/dist`),
    reports: normalize(`${root}/reports`),
    nodeModules: normalize(`${root}/node_modules`)
  },
  asset: {
    image: {
      urlLoaderPath: 'images',
      dataUriLimit: 10000
    },
    font: {
      urlLoaderPath: 'fonts',
    }
  },
  babel: {
    configPath: `${root}/config/babel/.babelrc`,
  },
  eslint: {
    configPath: `${root}/config/eslint/.eslintrc.js`
  },
  stylelint: {
    configPath: `${root}/config/stylelint/.stylelintrc`
  },
  bootstrap: {
    packagePath: `${nodeModules}/bootstrap/`
  },
  devServerPort: process.env.DEV_SERVER_PORT || 8080,
  apiServerUrl: process.env.API_SERVER_URL || 'http://localhost:8081'
};

module.exports = webpackConfig;
