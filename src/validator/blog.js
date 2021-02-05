/**
 * @description 微博数据格式校验
 */
const validate = require('./validator')

const blogSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string'
    },
    image: {
      type: 'string',
      maxLength: 255
    }
  }
}

/**
 * 格式校验
 * @param {Object} data 微博数据
 */
function blogValidate(data = {}) {
  return validate(blogSchema, data)
}

module.exports = blogValidate