var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hong Hua`s ExpressJS App' });
});

module.exports = router;
