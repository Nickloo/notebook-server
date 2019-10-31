var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = require('./app/router')
var authToken = require('./app/middleware/authToken')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// // 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')));
// app.use(express.static(path.join(__dirname, '../dist')));
// 因为是单页应用 所有请求都走/dist/index.html


//处理跨域请求
// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

// 校验token
app.use(authToken)

app.use(router)
// app.get('*', function (req, res) {
//   const html = fs.readFileSync(path.resolve(__dirname, 'public/dist/index.html'), 'utf-8');
//   res.send(html);
// });
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
