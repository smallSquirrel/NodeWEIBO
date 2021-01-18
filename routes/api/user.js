/**
 * @description 用户相关API接口
 */
const router = require('koa-router')()
const { isTest } = require('../../config/env')
const { register, isExist, login, deleteUserInfo } = require('../../src/controller/user')
const { genAsyncFunction } = require('../../src/middlewares/validator')
const userValidate = require('../../src/validator/user')
const { loginCheck } = require('../../src/middlewares/loginCheck')

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

router.post('/delete', loginCheck ,async (ctx) => {
  if (isTest) {
    // 测试环境下 删除自己
    const { userName } = ctx.session.userInfo
    ctx.body = await deleteUserInfo(userName)
  }
})

module.exports = router