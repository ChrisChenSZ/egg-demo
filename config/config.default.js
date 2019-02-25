'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544541698442_7845';

  // add your config here
  config.middleware = [ 'cors', 'report' ];

  // 关团csrf 安全
  config.security = {
    csrf: false,
    xframe: {
      enable: false,
    },
  };

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

  config.sequelize = {
    dialect: 'mysql',
    username: 'root',
    password: '123',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg-sequelize-doc-default',
  };

  return config;
};
