/**
 * @description user controller
 */
const { getUserInfo, createUser, deleteUser } = require('../service/user')
const { doCrypto } = require('../utils/cryp')
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
  userInfoNotExist,
  userInfoExist,
  registerFail,
  loginFail,
  deleteUserFailInfo
} = require('../model/ErrorInfo.js')

/**
 * 注册用户
 * @param {string} userName 
 * @param {string} password 
 * @param {number} gender 性别(1男，2女，3保密) 
 */
async function register({ userName, password, gender }) {
  // 业务逻辑处理
  let userInfo = await getUserInfo(userName)
  if(userInfo) {
    return new ErrorModel(userInfoExist)
  }
  // 调用service
  // 返回统一格式
  try {
    await createUser({
      userName,
      password: doCrypto(password),
      gender
    })
    return new SuccessModel()
  } catch (error) {
    console.error(error.message, error.stack)
    return new ErrorModel(registerFail)
  }
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

/**
 * 登录接口
 * @param {Obejtc} ctx koa2 ctx
 * @param {string} userName 用户名
 * @param {string} password 密码
 */
async function login(ctx, userName, password) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (!userInfo) {
    // 登录失败
    return new ErrorModel(loginFail)
  }
  // 登陆成功将用户信息写入session中
  if (ctx.session.userInfo === undefined) {
    ctx.session.userInfo = userInfo
  }
  return new SuccessModel()
}

/**
 * 删除用户
 * @param {string} userName 用户名
 */
async function deleteUserInfo(userName) {
  let result = await deleteUser(userName)
  if (result) {
    return new SuccessModel()
  }
  return new ErrorModel(deleteUserFailInfo)
}

module.exports = {
  register,
  isExist,
  login,
  deleteUserInfo
}