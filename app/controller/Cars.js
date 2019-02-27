'use strict';

const Controller = require('egg').Controller;

class CarsController extends Controller {
  async index() {
    console.log(1111, this.ctx.model.Cars);
    const result = await this.ctx.model.Cars.findAll();
    this.ctx.body = result;
  }
}

module.exports = CarsController;
