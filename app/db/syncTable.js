const User = require('../model/User.js')
const crypto = require('crypto');
// let md5 = crypto.createHash('md5');
const md5 = require('md5')
const authConf = require('../config/auth')
const install = async () => {
  await User.sync({ force: true })
}

const initData = async () => {
  let password = md5('123456' + authConf.md5)//加密后的密码
  await User.create({ username: 'root', password: password })
}

const modelName = process.argv.splice(2)[0]

switch (modelName) {
  case 'install':
    install()
    break;
  case 'initData':
    initData()
    break;
  default:
    console.log('no console');
    break;
}
module.exports = { install, initData }