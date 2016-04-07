/**
 * node端的文件测试
 * 刘述新-20160908
 * 
 * 
 */
'use strict';
var express = require('express');
var fs = require('fs');
var home = require('x-root-path');
var router = express.Router();
module.exports = function(router){
  //渲染主页面
  router.get('/',function(req,res,next){
    res.render('file_test/index.ejs');
  });
  //创建文件
  //
  router.get('/creat_file',function(req,res,next){
    var   fileName = req.query.filename;

    console.log(fileName);
    try{
      fs.mkdir(home+'/public/javascripts/'+fileName);
      fs.mkdir(home+'/routes/'+fileName);
      fs.mkdir(home+'/views/'+fileName);
      fs.mkdir(home+'/less/'+fileName);
     }catch(e){
      e.print();
     }
   
    fs.writeFile(home+'/public/javascripts/'+fileName+'/index.js', '我是通过写入的文件内容！',  function(err) {
      if (err) {
         return console.error(err);
      }else{
       console.log("数据写入成功！");
       var isOk = true;
      }

 /*  console.log("--------我是分割线-------------")
   
   console.log("读取写入的数据！");*/
/*   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });*/
  });
  fs.writeFile(home+'/routes/'+fileName+'/index.js', '我是通过写入的文件内容！',  function(err) {
      if (err) {
         return console.error(err);
      }else{
       console.log("数据写入成功！");
       var isOk = true;
      }
  });
  fs.writeFile(home+'/views/'+fileName+'/index.ejs', '我是通过写入的文件内容！',  function(err) {
      if (err) {
         return console.error(err);
      }else{
       console.log("数据写入成功！");
       var isOk = true;
      }
  });
fs.writeFile(home+'/public/javascripts/'+fileName+'/index.js', '我是通过写入的文件内容！',  function(err) {
      if (err) {
         return console.error(err);
      }else{
       console.log("数据写入成功！");
       var isOk = true;
      }
  });
fs.writeFile(home+'/less/'+fileName+'/index.less', '我是通过写入的文件内容！',  function(err) {
      if (err) {
         return console.error(err);
      }else{
       console.log("数据写入成功！");
       var isOk = true;
      }
  });
});
  
}