'use strict';

const Controller = require('egg').Controller;

class NewzController extends Controller {
  async newz() {
    this.ctx.body = 'newz';
  }
}

module.exports = NewzController;
