'use strict'
/**
 * ractive.js双向数据绑定，MVVM测试页面。
 * formidable 组件地址
 * https://www.npmjs.com/package/formidable
 */
var express = require('express');
var home = require('x-root-path');
var debug = require('debug')('ractive');
var _ =require('lodash');
var request = require('request');
//var request = require('superagent');
var formidable = require('formidable');
module.exports = function(router){
  //渲染主页面
  router.get('/',function(req,res,next){

    var obj ={
      name:'lihua',
      age:23
    }
    var objString =JSON.stringify(obj);
console.log("console.log:" +objString);
debug("debug: %s",objString);
    res.render('ractive_method/index');
  });
  router.get('/test1',function(req,res,next){
    res.render('ractive_method/event_test',{
      title:'事件测试'
    });
  });
  //request module test
  router.post('/test2',function(req,res,next){
   /* var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = home+"/public/dir/file";
    form.keepExtensions = false;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.maxFields = 1000;
   
     form.parse(req, function(err, fields, files) {
       console.log(fields);
       console.log(files);
    });
     form.on('file', function(name, file) {
       console.log(name);
       console.log(file);
     });
     form.on('error', function(err) {
       res.send("上传出现问题");
     });
    form.on('end', function() {
      res.send("上传成功");
    });*/
    //var form = new formidable.IncomingForm();
    var backReq = request.post({
      url:'http://localhost:3001/formtest'
    });
    //var backReq = request.post('http://localhost:3001/formtest');
                   //.type('multipart/form-data');
    console.log(req.param);
    req.pipe(backReq);
    req.on('error', next);
    backReq.on('error', next);
    backReq.pipe(res);
  });
}