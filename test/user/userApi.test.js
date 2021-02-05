/**
 * @description user相关接口测试案例
 */
const server = require('../server')

let userName = `u_${Date.now()}@126.com`
let password = `p_${Date.now()}`
const testUser = {
  userName,
  password,
  gender: 1,
}

// 绕过接口登录限制，存储登录的cookie
let cookie = ''

// 注册
test('Test: 注册一个用户，应该注册成功', async () => {
  const resp = await server.post('/api/users/register').send(testUser)
  expect(resp.body.status).toBe(0)
})

// 测试重复注册
test('Test: 重复注册一个用户，应该失败', async () => {
  const resp = await server.post('/api/users/register').send(testUser)
  expect(resp.body.status).not.toBe(0)
})

// 查询用户是否存在
test('Test: 查询注册的用户名，应该存在', async () => {
  const resp = await server.post('/api/users/isExist').send({ userName })
  expect(resp.body.status).toBe(0)
})

// json schema 检测
test('Test: 检测非法格式，注册应该失败', async () => {
  const resp = await server.post('/api/users/register').send({
    userName: '123',
    password: 'a',
    gender: 'man'
  })
  expect(resp.body.status).not.toBe(0)
})

// 登录验证
test('Test: 测试用户登录, 应该返回成功', async () => {
  const resp = await server.post('/api/users/login').send({
    userName,
    password
  })
  expect(resp.body.status).toBe(0)

  // 设置cookie
  cookie = resp.headers['set-cookie'].join(';')
})

// 修改用户信息
test('Test: 修改用户基本信息，应该成功', async () => {
  const resp = await server.post('/api/users/changeInfo').send({
    nickName: 'Test nickName',
    city: 'Test浦东',
    avatar: '/test.png',
    gender: 1
  }).set('cookie', cookie)
  expect(resp.body.status).toBe(0)
})

// 修改密码
test('Test: 修改用户密码，应该成功', async () => {
  const resp =  await server.post('/api/users/changePassword').send({
    password,
    newPassword: `p_${Date.now()}`
  }).set('cookie', cookie)
  expect(resp.body.status).toBe(0)
})

// 删除用户
test('Test: 删除用户，应该返回成功', async () => {
  const resp = await server.post('/api/users/delete').set('cookie', cookie)
  expect(resp.body.status).toBe(0)
})

// 退出登录
test('Test: 退出登录，应该返回成功', async () => {
  const resp = await server.post('/api/users/logout').set('cookie', cookie)
  expect(resp.body.status).toBe(0)
})

// 再次查询用户
test('Test: 删除之后，再次查询用户应该不存在', async() => {
  const resp = await server.post('/api/users/isExist').send({ userName })
  expect(resp.body.status).not.toBe(0)
})