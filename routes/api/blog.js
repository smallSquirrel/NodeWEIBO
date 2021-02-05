/**
 * @description 微博相关的接口
 */
const router = require('koa-router')()
const { createBlogController, findAllBlogListController } = require('../../src/controller/blog')
const { loginCheck } = require('../../src/middlewares/loginCheck')
const { genAsyncFunction } = require('../../src/middlewares/validator')
const blogValidate = require('../../src/validator/blog')

router.prefix('/api/blog')

// 创建微博
router.post('/create', loginCheck, async (ctx, next) => {
  const { content, image } = ctx.request.body
  const { id: userId } = ctx.session.userInfo
  ctx.body = await createBlogController(userId, content, image)
})

// 查询微博
router.post('/list', loginCheck, genAsyncFunction(blogValidate),async (ctx, next) => {
  const { id: userId } = ctx.session.userInfo
  ctx.body = await findAllBlogListController(userId)
})


module.exports = router