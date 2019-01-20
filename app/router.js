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
   *   name: Users
   *   description: User management and login
   */

  /**
   * @swagger
   * tags:
   *   - name: Login
   *     description: Login
   *   - name: Accounts
   *     description: Accounts
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
};
