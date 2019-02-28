'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544541698442_7845';

  // add your config here
  config.middleware = [ 'jwt', 'cors', 'report' ];

  // jwt 生成token 中间件设置
  config.jwt = {
    enable: true,
    ignore: [ '/login/' ], // 哪些请求不需要认证
  };

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

  config.redis = {
    clients: {
      loginToken: {
        // instanceName. See below
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        password: '',
        db: 0,
      },
      bar: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 1,
      },
    },
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
