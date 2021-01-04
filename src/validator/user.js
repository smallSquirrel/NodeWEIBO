/**
 * @description user 数据校验规则
 * @description JSON Schema 验证方式
 */

const validate = require('./validator')

const userSchema = {
  type: 'object',
  required: ['userName', 'password'],
  properties: {
    userName: {
      type: 'string',
      // pattern: '/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/',
      maxLength: 255,
      minLength: 2,
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 6,
    },
    nickName: {
      type: 'string',
      maxLength: 255,
    },
    avatar: {
      type: 'string',
      maxLength: 255,
    },
    city: {
      type: 'string',
      maxLength: 255,
      minLength: 2
    },
    gender: {
      type: 'number',
      minimum: 1,
      maximum: 3,
    },
  }
}

/**
 * 校验用户数据
 * @param {Object} data 用户数据
 */
function userValidate(data = {}) {
  return validate(userSchema, data)
}

module.exports = userValidate