'use strict';

module.exports = app => {
  const { STRING, UUID, UUIDV4 } = app.Sequelize;
  const BannerModel = app.model.define('banner', {
    id: {
      type: UUID, // 根据当前机器设备环境时间生成的唯一标识码
      defaultValue: UUIDV4, // v1是按时间生成 ，v4是随机生成
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: STRING(500),
      allowNull: false,
    },
  });
  return BannerModel;
};
