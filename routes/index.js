const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('welcome', {
    title: 'OSF - 一个自由开放的SNS社区'
  })
})

router.get('/home', async (ctx, next) => {
  await ctx.render('index', {
    title: '首页 - OSF - 一个自由开放的SNS社区'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'koa2 json',
    userName,
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params
  ctx.body = {
    title: 'koa2 json',
    userName,
    pageIndex,
  }
})

module.exports = router
