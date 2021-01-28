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

/**
 * 创建用户
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别(1男，2女，3保密) 
 */
async function createUser({ userName, password, gender = 3, nickName }) {
  let result = await User.create({
    userName,
    password,
    gender,
    nickName: nickName ? nickName : userName
  })
  return result.dataValues
}

/**
 * 删除用户
 * @param {string} userName 用户名
 */
async function deleteUser(userName) {
  let result = await User.destroy({
    where: {
      userName
    }
  })
  // result = 删除的行数
  return result > 0
}

/**
 * 修改用户信息
 * @param {string} userName 唯一用户名
 * @param {string} nickName 用户昵称
 * @param {string} city 城市
 * @param {string} avatar 头像
 * @param {number} gender 性别
 */
async function updateUser(userName, nickName, city, avatar, gender) {
  let user = await getUserInfo(userName)
  if (user) {
    user.nickName = nickName
    user.city = city
    user.avatar = avatar
    user.gender = gender
    await user.save()
    return true
  }
  return false
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser,
}