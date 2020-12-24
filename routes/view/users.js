const router = require('koa-router')()

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {
    title: 'OSF - 注册',
    isNav: false,
  })
})

router.post('/register', async (ctx, next) => {
  console.log(ctx.request.params)
  ctx.body = {
    ctx
  }
})

router.get('/login', async (ctx, next) => {
  await ctx.render('login', {
    title: 'OSF - 登录',
    isNav: false,
  })
})

router.post('/login', async (ctx, next) => {
  ctx.body = {
    ctx
  }
})

module.exports = router
