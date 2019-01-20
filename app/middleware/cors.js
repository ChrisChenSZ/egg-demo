'use strict';

module.exports = () => {
  return async function(ctx, next) {
    console.log(ctx);
    ctx.set('Access-Control-Allow-Origin', '*');
    // ctx.set(
    //   'Access-Control-Allow-Origin',
    //   'http://192.168.16.105:7001,http://127.0.0.1:7001'
    // );
    ctx.set(
      'Access-Control-Allow-Methods',
      'GET, POST, DELETE, PUT, PATCH, OPTIONS'
    );
    ctx.set(
      'Access-Control-Allow-Headers',
      'Content-Type, api_key, Authorization'
    );
    next();
  };
};
