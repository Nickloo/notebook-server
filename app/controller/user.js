const fs = require('fs')
const dao = require('../db/dao')
var crypto = require('crypto');
var checkUser = require('../utils/checkUser')
exports.login = async (req,res)=>{ 
  let md5 = crypto.createHash('md5');
  let username = req.body.username
  let password = md5.update(req.body.password||'').digest('hex');//加密后的密码
  console.log(password)
  let user = await dao.get('user')
  if(username==user[0].username&&password==user[0].password){
    res.json({
      data:1,
      msg:"成功"
    })
  }else{
    res.json({
      data: 0,
      msg:"失败"
    })
  }
}

exports.updatePassword = async (req, res) => {
  let md51 = crypto.createHash('md5');
  let md52 = crypto.createHash('md5');
  let users = await dao.get('user')
  let user = users[0]
  let username = req.body.username
  let passwordOld = md51.update(req.body.passwordOld).digest('hex');//加密后的密码
  let passwordNew = md52.update(req.body.passwordNew).digest('hex');//加密后的密码
  let ret
  if(user.username == username&& user.password == passwordOld){
    await dao.update('user', 0, { username: username, password: passwordNew })
    ret = 1
  }else{
    ret = 0
  }
  res.json({
    data: ret
  })
}
