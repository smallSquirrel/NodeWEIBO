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
  },
  jsonSchemaErrorInfo: {
    status: 10005,
    message: '数据格式校验错误，请输入正确格式'
  },
  loginCheckFail: {
    status: 10006,
    message: '您尚未登录'
  },
  changePasswordFailInfo: {
    status: 10007,
    message: '修改密码失败，请重试'
  },
  deleteUserFailInfo: {
    status: 10008,
    message: '删除用户失败'
  },
  changeInfoFail: {
    status: 10009,
    message: '修改信息失败，请稍后再试'
  },
  maxSizeFail: {
    status: 10010,
    message: '文件最大只能上传1M'
  }
}