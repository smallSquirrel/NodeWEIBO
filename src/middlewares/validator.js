/**
 * @description 生成校验中间件
 */

const { jsonSchemaErrorInfo } = require("../model/ErrorInfo")
const { ErrorModel } = require("../model/ResModel")


/**
 * 校验函数中间件
 * @param {Function} validateFunc 校验函数
 */
function genAsyncFunction(validateFunc = () => {}) {
  async function validata (ctx, next) {
    const data = ctx.request.body
    const error = validateFunc(data)
    if(error) {
      // 返回错误
      ctx.body = new ErrorModel(jsonSchemaErrorInfo)
      return
    }
    await next()
  }

  return validata
}

module.exports = {
  genAsyncFunction,
}