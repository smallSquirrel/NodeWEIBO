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
  // const session = ctx.session
  // if (session.viewCount === null) {
  //   session.viewCount = 0
  // }
  // session.viewCount ++
  ctx.body = {
    title: 'koa2 json',
    // count: session.viewCount,
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
