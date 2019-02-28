'use strict';

const Controller = require('egg').Controller;

const url = 'https://muat.mingshiedu.com:9194/cas/v1/tickets';

class JavaServiceController extends Controller {
  async index() {
    const result = await this.postCurl(url, {
      data: {
        username: 'test',
        password: 123456,
        service: 'https://www.baidu.com',
      },
    });

    const st = await this.getST(result);
    console.log('st====', st);
    // this.ctx.redirect(`${url}=${st}`);
    this.ctx.redirect('/loginSuccess');
  }

  async postCurl(url, option) {
    const result = await this.ctx.curl(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...option,
    });
    return result;
  }

  async getST(result) {
    const resUrl = JSON.parse(JSON.stringify(result)).headers.location;
    const rex = /tickets\/(\S*)/;
    const TGT = resUrl.match(rex)[1];
    const resST = await this.postCurl(`${url}/${TGT}`, {
      data: {
        service: 'https://www.baidu.com',
      },
    });
    const bufferData = JSON.parse(JSON.stringify(resST)).data;
    const changeBuffer = new Buffer(bufferData);
    return changeBuffer.toString();
  }
}

module.exports = JavaServiceController;
