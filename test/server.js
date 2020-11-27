/**
 * @description jest http test
 * @author zou
 */
const superTest = require('supertest')
const app = require('../app').callback()

module.exports = superTest(app)