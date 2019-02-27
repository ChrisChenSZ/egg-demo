# demo

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org

#### demo 已实现功能

#### 增加 swagger

swagger 注释编写参考 http://editor.swagger.io/#/ 一一对应
访问 swagger
1、修改 swaggerJsDos 下的 host 地址，主要是 swagger 里测试请求接口
2、开启地址: http://127.0.0.1:7001/swagger_ui_2.2.10/index.html#/

#### 增加跨域

#### 增加 mysql sequelize 连接数据库 增删改查案例
