'use strict';

module.exports = () => {
  return async function(ctx, next) {
    ctx.set('Access-Control-Allow-Origin', '*');
    const { request } = ctx;
    if (
      request.header.origin === 'http://192.168.16.105:7001' ||
      request.header.origin === 'http://127.0.0.1:7001'
    ) {
      ctx.set('Access-Control-Allow-Origin', request.header.origin);
      ctx.set(
        'Access-Control-Allow-Methods',
        'GET, POST, DELETE, PUT, PATCH, OPTIONS'
      );
      ctx.set(
        'Access-Control-Allow-Headers',
        'Content-Type, api_key, Authorization'
      );
    }

    await next();
  };
};
