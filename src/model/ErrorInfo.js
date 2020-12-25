/**
 * @description 错误信息常量配置 包含{ status: '', message : '' }
 */
module.exports = {
  userInfoExist: {
    status: 10001,
    message: '用户已存在'
  },
  registerFail: {
    status: 10002,
    message: '注册失败,请重试'
  },
  userInfoNotExist: {
    status: 10003,
    message: '用户名未存在'
  },
  loginFail: {
    status: 10004,
    message: '登录失败，用户名或密码错误'
  }
}