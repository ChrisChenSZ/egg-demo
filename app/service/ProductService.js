'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  constructor(ctx) {
    super(ctx);
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;
  }
  async getDetail(id) {
    if (!id) {
      return this.ServerResponse.createByErrorCodeMsg(
        this.ResponseCode.ILLEGAL_ARGUMENT,
        'ILLEGAL_ARGUMENT'
      );
    }
    const productRow = await this.ctx.model.ProductModel.findOne({
      where: { id },
    });
    if (!productRow) {
      return this.ServerResponse.createByErrorCodeMsg('不存在或已删除');
    }
    return this.ServerResponse.createBySuccessData(productRow.toJSON());
  }

  async getAll({
    pageNum = 1,
    pageSize = 6,
    sortBy = 'asc',
    categoryId = undefined,
  }) {
    console.log('categoryId', categoryId);
    const where = categoryId ? { categoryId } : {};
    console.log('where', where);
    const { count, rows } = await this.ctx.model.ProductModel.findAndCount({
      where,
      order: [[ 'id', 'ASC' ]],
      limit: Number(pageSize || 0),
      offset: Number(pageNum - 1 || 0) * Number(pageSize || 0),
    });
    return this.ServerResponse.createBySuccessData({
      pageNum,
      pageSize,
      list: rows,
      count,
    });
  }
}

module.exports = ProductService;
