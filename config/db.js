/**
 * @description 数据库存储配置
 */
const { isProd } = require('./env')

let MYSQL_CONFIG = {
  port: '3306',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'koa-weibo'
}

// 线上环境 在此判断
if (isProd) {
  // 线上MySQL配置
  MYSQL_CONFIG = {
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'koa-weibo'
  }
}


module.exports = {
  MYSQL_CONFIG
}