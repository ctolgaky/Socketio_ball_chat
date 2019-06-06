var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Balls Chat' });
});

router.get('/getEnv', function(req, res, next) {
  const envData =  require('../config/env.json')[process.env.NODE_ENV || 'development']; //ortam değişkeni
  res.json(envData);
});

module.exports = router;
