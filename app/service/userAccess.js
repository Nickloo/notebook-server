const md5 = require('md5')
const User = require('../model/User')
const authConf = require('../config/auth')
// class UserAccessService {
//   async login(username, password) {
//     const query = {
//       where: {
//         username: username,
//         password: md5(password + authConf.md5)
//       }
//     }
//     const user = await User.findOne(query)
//     if (!user) {
//       return {
//         code: 'ERROR',
//         data: null,
//         msg: '用户名或密码错误'
//       }
//     } else {
//       return {
//         code: 'SUCCESS',
//         data: 1,
//         msg: '成功'
//       }
//     }
//   }
// }
// module.exports = UserAccessService
module.exports.login = async (username, password) => {
  const query = {
    where: {
      username: username,
      password: md5(password + authConf.md5)
    }
  }
  const user = await User.findOne(query)
  // console.log(user);

  if (!user) {
    return {
      code: 'ERROR',
      data: null,
      msg: '用户名或密码错误'
    }
  } else {
    return {
      code: 'SUCCESS',
      data: 1,
      msg: '成功'
    }
  }
}

module.exports.register = async (username, password) => {
  let user = await User.create({ username, password: md5(password + authConf.md5) })
  return {
    code: 'SUCCESS',
    data: password,
    msg: '用户名或密码错误'
  }
}