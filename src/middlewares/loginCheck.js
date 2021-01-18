/**
 * @description 登录验证中间件
 */
const { loginCheckFail } = require("../model/ErrorInfo")
const { ErrorModel } = require("../model/ResModel")


/**
 * 验证用户是否登录
 * @param {Object} ctx ctx对象
 * @param {Function} next next
 */
async function loginCheck(ctx, next) {
  // 根据session判断用户是否登录
  if(ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  ctx.body = new ErrorModel(loginCheckFail)
}

/**
 * 登录跳转
 * @param {Object} ctx ctx对象
 * @param {*} next next
 */
async function loginRedirect(ctx, next) {
  // 已登录
  if(ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  // 未登录跳转到登录页面
  let currentUrl = ctx.url
  ctx.redirect('/login?url=' + encodeURIComponent(currentUrl))
}

module.exports = {
  loginCheck,
  loginRedirect
}