'use strict';

const Controller = require('egg').Controller;

module.exports = app => {
  return class LoginController extends Controller {
    async create() {
      const ctx = this.ctx;
      const { username, password } = ctx.request.body;
      const userData = await ctx.model.User.findOne({
        where: {
          username,
          password,
        },
      });
      console.log('=====', userData);
      const token = ctx.helper.loginToken({ userid: userData.id }, 7200); // token生成
      await app.redis.get('loginToken').set(userData.id, token, 'ex', 7200); // 保存到redis loginToken是redis的指定客户端
      ctx.body = {
        data: { token, expires: this.config.login_token_time },
        code: 1,
        msg: '登录成功',
      }; // 返回前端
    }
  };
};
