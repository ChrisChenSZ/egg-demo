'use strict';

const Service = require('egg').Service;

class BannerServiceService extends Service {
  constructor(ctx) {
    super(ctx);
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;
  }
  async getAll() {
    const data = await this.ctx.model.BannerModel.findAll();
    console.log(data);
    return this.ServerResponse.createBySuccessData({
      banner: data,
    });
  }
}

module.exports = BannerServiceService;
