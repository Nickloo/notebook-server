var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/article', function (req, res, next) {
    res.json('123456')
});

module.exports = router;
