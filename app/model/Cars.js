'use strict';
module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const CartModel = app.model.define(
    'cart',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // // 用户id
      // userId: { type: INTEGER, autoIncrement: true },
      // // 产品id
      // productId: { type: INTEGER, autoIncrement: true },
      // 数量
      quantity: {
        type: INTEGER(11),
        allowNull: true,
      },
      // 是否选择， 1已勾选， 0未勾选
      checked: {
        type: INTEGER(11),
        allowNull: true,
        defaultValue: true,
      },
      createTime: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updateTime: {
        type: DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    },
    {
      timestamps: false,
      tablseName: 'cart',
    },
    {
      indexes: [{ fields: [ 'userId' ] }],
    }
  );
  // ProductModel.belongsTo(app.model.categoryModel)

  return CartModel;
};
