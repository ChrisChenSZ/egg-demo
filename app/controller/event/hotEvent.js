'use strict';

const Controller = require('egg').Controller;

class HotEventController extends Controller {
  async eat() {
    this.ctx.body = '吃的新闻';
  }
}

module.exports = HotEventController;
