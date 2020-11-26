/**
 * @description redis的连接方式
 */
const redis = require('redis')
const { REDIS_CONF } = require('../config/db')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', (error) => {
  console.error('redis error => ', error)
})

/**
 * redis set funcktion
 * @param {string} key 键
 * @param {string} value 值
 * @param {number} tiemout 过期时间 单位 s
 */
function set(key, value, tiemout = 60 * 60) {
  if(typeof value === 'object') {
    value = JSON.stringify(value)
  }
  redisClient.set(key, value)
  redisClient.expire(key, tiemout)
}

/**
 * redis get
 * @param {string} key 
 */
function get(key) {
  const promise = new Promise((reslove, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return 
      }
      if (val === null) {
        reslove(null)
        return
      }

      try {
        reslove(JSON.parse(val))
      } catch (err) {
        reslove(val)
      }
    }) 
  })
  return promise
}

module.exports = {
  set,
  get,
}