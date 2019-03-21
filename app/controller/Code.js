'use strict';

const Controller = require('egg').Controller;

class CodeController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = ctx.request;
  }

  async show() {
    const ctx = this.ctx;
    const requestConfig = {
      appid: 'wxe11fc510b2cc5343',
      secret: '631c64f36e7af9e6b43f8f91dd3c1de6',
    };
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${
      requestConfig.appid
    }&secret=${requestConfig.secret}&js_code=${
      ctx.params.id
    }&grant_type=authorization_code`;
    const result = await this.ctx.curl(url, {
      method: 'GET',
      dataType: 'json',
    });
    console.log('222', result);
    ctx.body = result;
  }
}

module.exports = CodeController;
