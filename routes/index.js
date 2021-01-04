const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('welcome', {
    title: 'OSF - 一个自由开放的SNS社区'
  })
})

router.get('/home', async (ctx, next) => {
  await ctx.render('index', {
    title: '首页 - OSF - 一个自由开放的SNS社区',
    isNav: true
  })
})

module.exports = router
