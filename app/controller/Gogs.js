'use strict';

const Controller = require('egg').Controller;
const { Wechaty } = require('wechaty');
const wechaty = Wechaty.instance();

class GogsController extends Controller {
  // node 微信，需要2017年以前微信号
  async show() {
    const ctx = this.ctx;
    console.log('推送11111', ctx.params.id);
    if (ctx.params.id === 'login') {
      console.log(3333);
      wechaty // Global Instance
        .on('scan', (qrcode, status) =>
          console.log(
            `Scan QR Code to login: ${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
              qrcode
            )}`
          )
        )
        .on('login', user => console.log(`User ${user} logined`))
        .on('message', message => console.log(`Message: ${message}`))
        .start();
    } else if (ctx.params.id === 'send') {
      const room = await wechaty.Room.find({ topic: '明师前端小组' }); // get the room by topic
      console.log('Sending daily to room ' + room.id);
      wechaty.say('node微信机器人测试');
    }
    ctx.body = ctx.request.body;
  }

  async create() {
    const ctx = this.ctx;
    console.log('推送', ctx.request.body);
    // ctx.body = ctx.request.body;
    ctx.body = ctx.request.body;
  }
}

module.exports = GogsController;
