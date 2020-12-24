/**
 * @description Users 数据模型
 */
const Seq = require('../seq')
const { STRING, DECIMAL, BOOLEAN, INTEGR, TEXT } = require('../types')

/**
 * users表 user数据模型
 * 包含字段：
 * userName，
 * password，
 * nickName，
 * gender，
 * avatar，
 * city，
 * */
const Users = Seq.define('user', {
  userName: {
    type: STRING,
    allowNull: false,
    nuique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '用户昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 3,
    comment: '性别（1 男性， 2 女性， 3 保密）'
  },
  avatar: {
    type: STRING,
    comment: '头像'
  },
  city: {
    type: STRING,
    comment: '城市'
  }
})

module.exports = Users