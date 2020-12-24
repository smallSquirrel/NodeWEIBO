/**
 * @description user service
 */
const { formatUser } = require('./_format')
// 模型
const { User } = require('../database/model/index')

/**
 * 获取用户信息
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function getUserInfo(userName, password) {
  let whereOpt = { userName }
  if (password) {
    Object.assign(whereOpt, { password })
  }

  const userInfo = await User.findOne({
    // attributes: ['id', 'userName', 'nickName', ],  // 想要查询的列
    where: whereOpt, // 查询条件
  })
  if (userInfo === null) { return userInfo }

  // 格式化数据
  let formatRes = formatUser(userInfo.dataValues)
  return formatRes

}

module.exports = {
  getUserInfo,
}