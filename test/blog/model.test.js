/**
 * @description 微博模型测试
 */
const { Blog } = require('../../src/database/model')

test('Test: 微博模型各个属性，符合预期', () => {
  const blog = Blog.build({
    userId: 1,
    content: '这是微博接口测试案例',
    image: '/test.png'
  })
  expect(blog.userId).toBe(1)
  expect(blog.content).toBe('这是微博接口测试案例')
  expect(blog.image).toBe('/test.png')
})