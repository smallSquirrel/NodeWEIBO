/**
 * @description blog home page 接口 单元测试
 */
const server = require('../server')
const { COOKIE } = require('../testUserInfo')

test('Test: 创建一条微博, 应该成功', async () => {
  let content = '这是单元测试自动创建的数据' + Date.now()
  let image = '/xxxxx.png'

  const resp = await server.post('/api/blog/create').send({
    content,
    image,
  }).set('cookie', COOKIE)

  expect(resp.body.status).toBe(0)
  expect(resp.body.data.content).toBe(content)
  expect(resp.body.data.image).toBe(image)
})