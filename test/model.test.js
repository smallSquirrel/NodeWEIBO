/**
 * @description model测试案例
 */
const { User } = require('../src/database/model/index')

test('Test: User Model各个属性，符合预期', () => {
  const user = User.build({
    userName: 'zhangsan@126.com',
    password: 'p123123',
    nickName: '远上寒山石径斜',
    // gender: '',
    avatar: 'http://localhost:3000/imgae/avatar.png',
    city: '上海'
  })
  expect(user.userName).toBe('zhangsan@126.com')
  expect(user.password).toBe('p123123')
  expect(user.nickName).toBe('远上寒山石径斜')
  expect(user.gender).toBe(3)
  expect(user.avatar).toBe('http://localhost:3000/imgae/avatar.png')
  expect(user.city).toBe('上海')
})