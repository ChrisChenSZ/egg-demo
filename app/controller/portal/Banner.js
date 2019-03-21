'use strict';

const Controller = require('egg').Controller;

class BannerController extends Controller {
  async index() {
    const response = await this.ctx.service.bannerService.getAll();
    this.ctx.body = response;
  }
}

module.exports = BannerController;
