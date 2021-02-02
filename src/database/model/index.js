/**
 * @description 数据模型入口文件
 */
const User = require('./User')
const Blog = require('./Blog')

// 创建外键 - 创建关联关系 - 一对多
User.hasMany(Blog)
Blog.belongsTo(User, {
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog,
}