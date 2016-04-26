'use strict'
/**
 * ractive.js双向数据绑定，MVVM测试页面。
 */
var express = require('express');
var debug = require('debug')('ractive');
var _ =require('lodash');
var router = express.Router();
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
}