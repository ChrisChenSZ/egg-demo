'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544541698442_7845';

  // add your config here
  config.middleware = [ 'cors', 'report' ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
    // root: [
    //   path.join(appInfo.baseDir, 'app/view'),
    //   path.join(appInfo.baseDir, 'path/to/another'),
    // ].join(','),
  };

  config.static = {
    prefix: '', // 配置需不需要加前缀
    dir: path.join(appInfo.baseDir, 'app/public'),
  };

  return config;
};
