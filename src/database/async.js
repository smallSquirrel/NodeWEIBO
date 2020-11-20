/**
 * @description MySQL连接同步
 */
const seq = require('./seq')

// 测试连接
seq.authenticate().then(() => {
  console.log('Mysql 连接 .... OK')
}).catch(() => {
  console.log('Mysql 连接 .... Fail')
})

// 执行同步
seq.sync({ force: true }).then(() => {
  console.log('sync .... OK')
  process.exit()
})