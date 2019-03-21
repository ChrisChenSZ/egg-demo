'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  /**
   * @swagger
   * tags:
   *   name: home
   *   description: 目录接口
   */

  /**
   * @swagger
   * /home:
   *   get:
   *     tags: [home]
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: hello world
   */
  router.get('/home', controller.home.json);
  router.get('/', controller.home.index);
  /**
   * @swagger
   * definitions:
   *   Login:
   *     required:
   *       - username
   *       - password
   *     properties:
   *       username:
   *         type: string
   *       password:
   *         type: string
   *       path:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   - name: Login
   *     description: Login
   *   - name: Accounts
   *     description: Accounts
   *   - name: Code
   *     description: 小程序code
   */

  /**
   * @swagger
   * /login:
   *   post:
   *     description: Login to the application
   *     tags: [Users, Login]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           type: object
   *           $ref: '#/definitions/Login'
   */
  router.get('/newz', controller.newz.newz);
  router.get('/event/hot', controller.event.hotEvent.eat);
  router.get('/swagger.json', controller.home.swaggerJson);
  // 会员服务
  router.get('/courses/Evaluate/:id', controller.courses.evaluate);
  router.post('/courses/create', controller.courses.create);
  router.get('/java/service', controller.javaService.index);
  router.get('/cars', controller.cars.index);
  router.get('/loginSuccess', controller.home.loginSuccess);

  /**
   * @swagger
   * tags:
   *   - name: Users
   *     description: 用户
   *   - name: products
   *     description: 商品列表
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     tags: [Users]
   *     description: 获取所有用户
   *     responses:
   *       200:
   *         description: 获取所有用户
   */

  router.resources('users', '/users', controller.users);

  /**
   * @swagger
   * /login:
   *   post:
   *     tags: [Login]
   *     description: 登录
   *     responses:
   *       200:
   *         description: 账户密码登录
   */
  router.resources('login', '/login', controller.login);

  /**
   * @swagger
   * /code/:id:
   *   get:
   *     tags: [Code]
   *     description: 发送小程序用户code
   *     responses:
   *       200:
   *         description: 换取token
   */
  router.resources('code', '/code', controller.code);
  router.resources('gogs', '/gogs', controller.gogs);

  require('./router/portal/productRouter.js')(app);
  require('./router/portal/banner.js')(app);
};
