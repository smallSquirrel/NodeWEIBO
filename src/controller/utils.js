/**
 * @description 公共方法controller
 */
const fse = require('fs-extra')
const path = require('path')
const { maxSizeFail } = require("../model/ErrorInfo")
const { ErrorModel, SuccessModel } = require("../model/ResModel")

// 存储目录
const DISK_FOLDER_PATH = path.join(__dirname, '..', '..', 'uploadFiles')
// 上传的最大文件体积 1M
const MAX_SIZE = 1024 * 1024 * 1024

/**
 * 上传文件
 * @param {string} name 文件名
 * @param {string} type 文件类型
 * @param {number} size 文件大小
 * @param {string} filePath 文件路径
 */
async function saveFile({ name, type, size, filePath }) {
  if (size > MAX_SIZE) {
    // 删除过大的文件
    await fse.remove(filePath)
    return new ErrorModel(maxSizeFail)
  }

  // 线上环境调用 CDN服务API，将文件传递过去，获取返回的URL

  // 移动文件
  const fileName = Date.now()+'_'+name
  const fileToPath = path.join(DISK_FOLDER_PATH, fileName)
  await fse.move(filePath, fileToPath)

  // 返回信息
  return new SuccessModel({
    url: '/' + fileName
  })
}

module.exports = {
  saveFile,
}
