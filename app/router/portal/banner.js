'use strict';
module.exports = app => {
  const { router, controller } = app;

  router.get('/banner', controller.portal.banner.index);
};
