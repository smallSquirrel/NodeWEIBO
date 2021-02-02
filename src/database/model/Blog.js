/**
 * @description Blogs 微博数据模型
 */

const Seq = require('../seq')
const { STRING, TEXT, INTEGR } = require('../types')

/**
 * 微博内容-数据模型
 * 包含字段
 * id
 * content
 * image
 * userId
 */
const Blogs = Seq.define('Blog', {
  userId: {
    type: INTEGR,
    allowNull: false,
    comment: '用户ID'
  },
  content: {
    type: TEXT,
    allowNull: false,
    comment: '微博内容'
  },
  image: {
    type: STRING,
    comment: '微博图片'
  }
})

module.exports = Blogs