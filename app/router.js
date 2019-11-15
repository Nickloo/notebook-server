var express = require('express');
var router = express.Router();
var authToken = require('./middleware/authToken')
var index = require('./controller/index.js')
var article = require('./controller/article.js')
var user = require('./controller/user.js')
/* GET users listing. */
// router.get('/', index.index);
router.get('/articles', authToken, article.index);
router.post('/articles', article.create);
router.delete('/articles/:id', article.remove);
router.put('/articles/:id', article.update);

router.post('/login', user.login);
router.post('/editPassword', user.updatePassword);
module.exports = router;