'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // console.log('=======', app.model.define);
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });
  // console.log(User);
  return User;
};