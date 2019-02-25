'use strict';

const Controller = require('egg').Controller;

class CoursesController extends Controller {
  async evaluate() {
    return;
  }
  async create() {
    const ctx = this.ctx;
    const { course } = ctx.request.body;
    console.log(ctx.request.body, course);
    const courseData = await ctx.model.Courses.create({ course });
    ctx.status = 201;
    ctx.body = courseData;
  }
}

module.exports = CoursesController;
