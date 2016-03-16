var express = require('express');
var obj = require('./config');
/*var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./config', 'utf8'));*/
var router = express.Router();


module.exports = function(router) {

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('myform', { data: obj});
});
router.get('/getform_msg', function(req, res, next) {
  res.render('test', { title: 'Express' });
});

}
