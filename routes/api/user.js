/**
 * @description 用户相关API接口
 */
const router = require('koa-router')()
const { isTest } = require('../../config/env')
const { register, isExist, login, deleteUserInfo, changeUserInfo } = require('../../src/controller/user')
const { genAsyncFunction } = require('../../src/middlewares/validator')
const userValidate = require('../../src/validator/user')
const { loginCheck, loginRedirect } = require('../../src/middlewares/loginCheck')

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
router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login(ctx, userName, password)
})

// 删除用户
router.post('/delete', loginCheck ,async (ctx, next) => {
  if (isTest) {
    // 测试环境下 删除自己
    const { userName } = ctx.session.userInfo
    ctx.body = await deleteUserInfo(userName)
  }
})

// 修改用户信息
router.post('/changeInfo', loginCheck, genAsyncFunction(userValidate), async (ctx, next) => {
  const { nickName, city, avatar, gender } = ctx.request.body
  ctx.body = await changeUserInfo(ctx, { nickName, city, avatar, gender })
})

// 修改密码
router.post('/changePassword', loginRedirect, async (ctx, next) => {

})

module.exports = router