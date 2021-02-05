/**
 * blog service
 */
const { Blog } = require("../database/model/index")

/**
 * 创建微博
 * @param {Number} userId 用户ID
 * @param {String} content 微博内容
 * @param {String} image 图片URL
 */
async function createBlog(userId, content, image) {
  let result = await Blog.create({
    userId,
    content,
    image
  })
  return result.dataValues
}

/**
 * 查询微博
 * @param {Number} userId 用户ID
 */
async function findAllBlog(userId) {
  let whereOpt = { userId }
  const blogList = await Blog.findAll({
    where: whereOpt
  })
  return blogList
}

module.exports = {
  createBlog,
  findAllBlog,
}