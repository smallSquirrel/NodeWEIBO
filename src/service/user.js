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
 * @param {Object} param0 要修改的信息 { newNickName, newCity, newAvatar, newGender, newPassword }
 * @param {Object} param1 查询条件 { userName, password }
 */
async function updateUser(
  { newNickName, newCity, newAvatar, newGender, newPassword },
  { userName, password }
) {

  // 拼装需要修改的信息
  let updateData = {}
  if (newNickName) {
    updateData.nickName = newNickName
  }
  if (newCity) {
    updateData.city = newCity
  }
  if (newAvatar) {
    updateData.avatar = newAvatar
  }
  if (newGender) {
    updateData.gender = newGender
  }
  if (newPassword) {
    updateData.password = newPassword
  }

  // 拼装查询条件
  let whereData = {
    userName,
  }
  if (password) {
    whereData.password = password
  }

  let result = await User.update(updateData, {
    where: whereData
  })

  // 修改的行数是否大于零
  return result[0] > 0
}

module.exports = {
  getUserInfo,
  createUser,
  deleteUser,
  updateUser,
}