'use strict';
module.exports = app => {
  const { router, controller } = app;

  router.get('/product/detail', controller.portal.productController.getAll);

  router.get(
    '/product/detail/:id',
    controller.portal.productController.getDetail
  );
};
