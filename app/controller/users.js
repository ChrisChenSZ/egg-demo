'use strict';

const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    const data = await ctx.model.User.findAll(query);
    const Op = this.app.Sequelize.Op;
    // ctx.model.User.findAndCountAll({
    //   where: {
    //     name: {
    //       [Op.like]: 'ls',
    //     },
    //   },
    // }).then(result => {
    //   console.log(111, result.count, result);
    //   console.log(222, result.rows);
    // });
    // console.log('user_get', data, typeof data);
    const dataTest = await ctx.model.User.findOne({
      where: {
        [Op.or]: [{ id: [ 7 ] }, { id: [ 8 ] }],
      },
    });
    console.log(111, dataTest);
    ctx.body = data;
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findById(toInt(ctx.params.id));
    // console.log('user_get/:id', ctx.body);
  }

  async create() {
    const ctx = this.ctx;
    // const { name, age } = ctx.request.body;
    // const user = await ctx.model.User.create({ name, age });
    const user = await ctx.model.User.bulkCreate([
      { name: '周杰伦', age: 22 },
      { name: '刘德华', age: 65 },
    ]);
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    // 这样写也可以
    // user.name = name;
    // user.age = age;
    // await user.save();
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
