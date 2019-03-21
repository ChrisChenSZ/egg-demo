'use strict';
const { ON_SALE } = require('../common/product.js');
module.exports = app => {
  const { STRING, TEXT, UUID, UUIDV4, DECIMAL, INTEGER, DATE } = app.Sequelize;
  const ProductModel = app.model.define('product', {
    id: {
      type: UUID, // 根据当前机器设备环境时间生成的唯一标识码
      defaultValue: UUIDV4, // v1是按时间生成 ，v4是随机生成
      allowNull: false,
      primaryKey: true,
    },
    // 分类id
    categoryId: {
      type: UUID,
      allowNull: false,
    },
    name: {
      // 商品名称
      type: STRING(50),
      allowNull: false,
    },
    // // 商品副标题
    subtitle: {
      type: STRING(200),
      allowNull: false,
    },
    // 产品主图，url相对地址
    mainImage: {
      type: STRING(500),
      allowNull: false,
    },
    // 图片地址，json格式
    subImages: {
      type: TEXT,
      allowNull: true,
    },
    // 商品详情
    detail: {
      type: TEXT,
      allowNull: true,
    },
    price: {
      type: DECIMAL(20, 2),
      allowNull: false,
    },
    // 库存
    stock: {
      type: INTEGER(6),
      allowNull: true,
    },
    // 商品状态 1-在售，2-下架，3-删除
    status: {
      type: INTEGER(6),
      allowNull: true,
      defaultValue: ON_SALE.CODE,
    },
    createTime: {
      type: DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  });
  return ProductModel;
}
;
