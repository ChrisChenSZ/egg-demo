'use strict';

const Controller = require('egg').Controller;

class ProductControllerController extends Controller {
  async getDetail() {
    const { id } = this.ctx.params;
    const response = await this.ctx.service.productService.getDetail(id);
    this.ctx.body = response;
  }

  async getAll() {
    const query = this.ctx.request.query;
    console.log('11111', query);
    const response = await this.ctx.service.productService.getAll(query);
    console.log(5555, response);
    this.ctx.body = response;
  }
}

module.exports = ProductControllerController;
