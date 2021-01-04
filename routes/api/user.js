/**
 * @description 用户相关API接口
 */
const router = require('koa-router')()
const { register, isExist, login } = require('../../src/controller/user')
const { genAsyncFunction } = require('../../src/middlewares/validator')
const userValidate = require('../../src/validator/user')

router.prefix('/api/users')

// 注册
router.post('/register', genAsyncFunction(userValidate), async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

// 用户是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

// 登录
router.post('/login', async (ctx) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

module.exports = router