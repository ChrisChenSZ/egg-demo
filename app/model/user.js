'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // console.log('=======', app.model.define);
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING(50), allowNull: false, unique: true },
    password: { type: STRING(50), allowNull: false },
    tel: STRING(11),
    created_at: DATE,
    updated_at: DATE,
  });
  // console.log(User);
  return User;
};
