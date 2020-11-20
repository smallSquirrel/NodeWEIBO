/**
 * @description 环境配置
 */

 const node_env = process.env.NODE_ENV

 module.exports = {
   isDev: node_env === 'dev',
   notDev: node_env !== 'dev',
   isProd: node_env === 'production',
   notProd: node_env !== 'production',
   isTest: node_env === 'test',
   notTest: node_env !== 'test',
 }