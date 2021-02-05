/**
 * @description 微博接口 controller
 */
const { SuccessModel, ErrorModel } = require("../model/ResModel")
const { createBlogFail, findBlogListFail } = require('../model/ErrorInfo.js')
const { createBlog, findAllBlog } = require("../service/blog")

/**
 * 创建微博
 * @param {Int} userId 用户ID
 * @param {String} content 微博内容
 * @param {String} image 图片URL
 */
async function createBlogController(userId, content, image) {
  let result = await createBlog(userId, content, image)
  if (result) {
    return new SuccessModel(result)
  }
  return new ErrorModel(createBlogFail)
}

/**
 * 查询微博列表
 * @param {Int} userId 用户ID
 */
async function findAllBlogListController(userId) {
  let result = await findAllBlog(userId)
  if (result) {
    return new SuccessModel(result)
  }
  return new ErrorModel(findBlogListFail)
}

module.exports = {
  createBlogController,
  findAllBlogListController,
}