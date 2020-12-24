/**
 * @description user controller
 */
const { getUserInfo } = require('../service/user')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { userInfoNotExist } = require('../model/ErrorInfo.js')

async function register() {
  // 业务逻辑处理
  // 调用service
  // 返回统一格式
}

/**
 * 用户名是否存在
 * @param {string} userName 
 */
async function isExist(userName) {
  let userInfo = await getUserInfo(userName)
  if(userInfo) {
    // 用户已存在
    return new SuccessModel(userInfo)
  } else {
    // 用户未存在
    return new ErrorModel(userInfoNotExist)
  }
}

module.exports = {
  register,
  isExist,
}