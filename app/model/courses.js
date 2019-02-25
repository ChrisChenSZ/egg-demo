'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // console.log('=======', app.model.define);
  const User = app.model.define('courses', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    course: STRING,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
