/**
 * @description response 数据模型
 */

 /**
  * @description 基础返回数据模型
  */
class BaseModel {
  constructor({ status, data, message }) {
    this.status = status
    if(data) {
      this.data = data
    }
    if(message) {
      this.message = message
    }
  }
}

/** 成功model */
class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({ status: 0, data, })
  }
}

/** 失败model */
class ErrorModel extends BaseModel {
  constructor({ status, message }) {
    super({ status, message })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel,
}