/**
 * @description sequelize 数据类型 封装
 */
const Sequelize = require('sequelize')

module.exports = {
  STRING: Sequelize.STRING,
  TEXT: Sequelize.TEXT,
  BOOLEAN: Sequelize.BOOLEAN,
  DECIMAL: Sequelize.DECIMAL,
  INTEGR: Sequelize.INTEGER,
}