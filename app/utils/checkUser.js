const dao = require('../db/dao')
var crypto = require('crypto');
module.exports = async (req, res,next) => {
  let md5Check = crypto.createHash('md5');
  let username = req.headers.username
  let password = md5Check.update(req.headers.password || '').digest('hex');//加密后的密码
  let users = await dao.get('user')
  let user = users[0]
  if (user.username == username && user.password == password) {
    return true
  } else {
    res.json({
      data: "没有权限"
    })
    return false
  }
}