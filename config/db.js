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

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
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

  // 线上Redis配置
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}


module.exports = {
  REDIS_CONF,
  MYSQL_CONFIG,
}