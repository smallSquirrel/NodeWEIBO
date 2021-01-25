/**
 * @description 公共api
 */
const router = require('koa-router')()

router.prefix('/api/utils')
// 图片上传
router.post('/upload', async (ctx) => {

})

module.exports = router