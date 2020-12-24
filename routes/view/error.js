/**
 * @description error 和 404 页面路由
 */
const router = require('koa-router')()

// error
router.get('/error', async (ctx, next) => {
  await ctx.render('error', {
    title: 'OSF - 错误页面',
    message: '错误页面',
    isNav: false,
  })
})

// 404
router.get('*', async (ctx, next) => {
  await ctx.render('404', {
    title: 'OSF - 404错误页面',
    message: 'Not Found',
    isNav: false
  })
})

module.exports = router