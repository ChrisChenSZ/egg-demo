'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
class NewzController extends Controller {
  async newz() {
    const query = {
      limit: toInt(this.ctx.query.limit),
      offset: toInt(this.ctx.query.offset),
    };
    const data = await this.ctx.model.User.findAll(query);
    // console.log('user_get', data, typeof data);
    console.log('ctx', this.ctx);
    this.ctx.body = data;
  }
}

module.exports = NewzController;
