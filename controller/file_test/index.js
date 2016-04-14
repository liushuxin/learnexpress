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
var moment =require('moment');
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

    console.log('您要创建的文件名为：'+fileName);
    try{
      fs.mkdir(home+'/public/javascripts/page/'+fileName);
      fs.mkdir(home+'/controller/'+fileName);
      fs.mkdir(home+'/templates/'+fileName);
      fs.mkdir(home+'/less/page/'+fileName);
      console.log("==========================================");
      console.log("文件夹创建成功！");
      console.log("==========================================");
      createPublicJavascriptFile(fileName);
     }catch(e){
      e.print();
     }
      function createPublicJavascriptFile(fileName){
        fs.readFile(home+'/public/file/jstpl.js', function (err, data) {
            if (err) {
               return console.error(err);
            }
            var temp =data.toString();
            var arr =temp.split('@date:');

            var result =arr[0]+'@date:'+moment().format('YYYY-MM-DD')+arr[1];
            fs.writeFile(home+'/public/javascripts/page/'+fileName+'/index.js',result,  function(err) {
            if (err) {
               return console.error(err);
            }else{
             console.log(home+'/public/javascripts/page/'+fileName+'/index.js 数据写入成功！');
             createRouterFile(fileName);
            }
          });
        });
      }
      function createRouterFile(fileName){
        fs.readFile(home+'/public/file/routertpl.js', function (err, data) {
            if (err) {
               return console.error(err);
            }
            fs.writeFile(home+'/controller/'+fileName+'/index.js',data.toString(),  function(err) {
            if (err) {
               return console.error(err);
            }else{
             console.log(home+'/controller/'+fileName+'/index.js 数据写入成功！');
             createViewsFile(fileName);
            }
          });
        });
      }
      function createViewsFile(fileName){
        fs.readFile(home+'/public/file/viewstpl.ejs', function (err, data) {
            if (err) {
               return console.error(err);
            }
            fs.writeFile(home+'/templates/'+fileName+'/index.ejs',data.toString(),  function(err) {
            if (err) {
               return console.error(err);
            }else{
             console.log(home+'/templates/'+fileName+'/index.ejs 数据写入成功！');
             createLessFile(fileName);
            }
          });
        });
      }
      function createLessFile(fileName){
        fs.readFile(home+'/public/file/lesstpl.less', function (err, data) {
            if (err) {
               return console.error(err);
            }
            fs.writeFile(home+'/less/page/'+fileName+'/index.less',data.toString(),  function(err) {
            if (err) {
               return console.error(err);
            }else{
             console.log(home+'/less/page/'+fileName+'/index.less 数据写入成功！');
             console.log("==========================================");
             console.log("文件创建成功！");
             console.log("==========================================");
             res.send(true);
            }
          });
        });
      }
});
}