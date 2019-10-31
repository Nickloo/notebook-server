// var response = require('./response')
// var common = require('./common')
const response = require('../utils/response')
module.exports = function (req, res, next) {
  console.log('token');
  var token = req.body.token || req.query.token || req.headers['token']
  if (token) {
    console.log(token);

    // common.verifytoken(token).then((data) => {
    //   if (data) {
    //     req.decoded = data
    //     next()
    //   }
    //   else {
    //     res.send(response.out("无效的token,请重新登录"))
    //   }
    // })
    next()
  }
  else {
    next()
    // res.json(response.error({ msg: "123" }))
  }
}