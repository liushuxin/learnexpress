var express = require('express');
var router = express.Router();

module.exports = function(router) {
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getBaseInfo', function(req, res, next) {
  res.render('test', { title: 'Express' });
});
router.get('/lodash/methods', function(req, res, next) {
  res.render('lodash_method', { title: 'Express' });
});
}
