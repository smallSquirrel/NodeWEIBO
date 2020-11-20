/**
 * @description sequelize 实例
 */
const Sequelize = require('sequelize')
const { MYSQL_CONFIG } = require('../../config/db')
const { isProd, isTest } = require('../../config/env')
const { port, host, user, password, database } = MYSQL_CONFIG

let conf = {
  host,
  port,
  dialect: 'mysql'
}

// if (isTest) {
//   // 执行测试任务时，不打印Sequelize log信息
//   conf.logging = () => {}
// }

if (isProd) {
  // 线上配置连接池
  conf.pool = {
    max: 5,      // 最大连接数
    min: 0,       // 最小连接数
    idel: 10000,  // 如果连接池一个连接10s内没有被使用，则释放
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq