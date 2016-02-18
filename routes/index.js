var express = require('express');
var router = express.Router();
var  request =require('superagent');
var http =require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getBaseInfo', function(req, res, next) {
  res.render('test', { title: 'Express' });
});
router.get('/getCallBack', function(req, resp, next) {

	resp.render('callback', {'title':"Hello World"});
		
  });

//获取数据
router.get('/getCallBacks', function(req, resp, next) {
	console.log("HHHHHHHHHHHHHHHHHHH");
request
  .get('http://localhost:8080/jrjy/student/QueryCallBack.do')
  .pipe(resp)
  .on('end',function(err, res){
  	if(err){
  		console.log("is Error!");
  	}else{
  		console.log("SSSSSSSSSSSSSS"+res.body);
  	}
  	
  });


   });

module.exports = router;
