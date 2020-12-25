/**
 * @description 加密函数
 */
const crypto = require('crypto')

// 密钥
const SECRET_KEY = 'SGHGHweiui1292390<>?:{}&&^@#%'

/**
 * @description md5加密
 * @param {string} content 明文密码
 */
function _md5(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

/**
 * 加密函数
 * @param {string} content 
 */
function doCrypto(content) {
  const string = `password=${content}&key=${SECRET_KEY}`
  return _md5(string)
}

module.exports = {
  doCrypto
}