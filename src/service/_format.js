/**
 * @description 格式化数据
 */

/**
 * 当用户没有头像时，使用默认头像 https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNLemIm7rQNH0I0wNyDpUYqKkRS9NyzWltQ&usqp=CAU
 * @param {Object} obj 用户信息对象
 */
function _formatUserAvatar(obj) {
  if(obj.avatar === null) {
    obj.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNLemIm7rQNH0I0wNyDpUYqKkRS9NyzWltQ&usqp=CAU'
  }
  return obj
}

/**
 * 格式化用户
 * @param { Array | Object } list 
 */
function formatUser(list) {
  if (list === null) { return list }
  if(list instanceof Array) {
    // 数组 
    return list.map(_formatUserAvatar)
  }
  return _formatUserAvatar(list)
}

module.exports = {
  formatUser,
}