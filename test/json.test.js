/**
 * @description Json router test
 * @author zou
 */

const request = require('./server')

test('json 路由返回正确 ', async () => {
  const res = await request.get('/json')
  expect(res.body).toEqual({ title: 'koa2 json' });
  expect(res.body.title).toBe('koa2 json');
})
