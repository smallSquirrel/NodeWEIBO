const router = require('koa-router')()
const { loginRedirect } = require('../../src/middlewares/loginCheck')

router.prefix('/users')

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {
    title: 'OSF - 注册',
    isNav: false,
  })
})

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: 'OSF - 登录',
    isNav: false,
  })
})

router.get('/setting', loginRedirect, async(ctx, next) => {
  await ctx.render('setting', ctx.session.userInfo)
})

module.exports = router
