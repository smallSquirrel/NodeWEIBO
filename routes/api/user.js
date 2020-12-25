/**
 * @description 用户相关API接口
 */
const router = require('koa-router')()
const { register, isExist, } = require('../../src/controller/user')
router.prefix('/api/users')

// 注册
router.post('/register', async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

// 用户是否存在
router.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

module.exports = router