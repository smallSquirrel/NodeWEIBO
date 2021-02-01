/**
 * @description 公共api
 */
const router = require('koa-router')()
const koaFormUpload = require('formidable-upload-koa')
const { loginCheck } = require('../../src/middlewares/loginCheck')
const { saveFile } = require('../../src/controller/utils')
router.prefix('/api/utils')

// 图片上传
const options = {}
router.post('/upload', loginCheck, koaFormUpload(), async (ctx) => {
  const file = ctx.req.files['file']
  const { name, size, type, path } = file
  ctx.body = await saveFile({
    name,
    size,
    type,
    filePath: path
  })
})

module.exports = router