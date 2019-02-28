'use strict';

const Controller = require('egg').Controller;

const swaggerSpec = require('../modules/swaggerJsDos.js');

class HomeController extends Controller {
  async index() {
    // const username = 'chris';
    const userInfo = await this.service.home.getUserInfo();
    await this.ctx.render('home.html', userInfo);
  }

  async json() {
    this.ctx.body = { data: { name: 'chris' } };
  }

  async swaggerJson() {
    this.ctx.body = swaggerSpec;
  }

  async loginSuccess() {
    await this.ctx.render('loginSuccess.html');
  }
}

module.exports = HomeController;
