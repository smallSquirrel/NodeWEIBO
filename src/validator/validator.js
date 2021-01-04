/**
 * @description json schema 校验函数
 */
const Ajv = require('ajv').default
const ajv = new Ajv({
  // allErrors: true, // 输出所有错误
})

/**
 * 校验函数
 * @param {object} schema 校验规则
 * @param {object} data 需要校验的对象
 */
function validate(schema, data = {}) {
  const validate = ajv.compile(schema)
  const valid = validate(data)
  if(!valid) {
    return validate.errors[0]
  }
}

module.exports = validate