/**
 * router 功能
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
    res.render('css_test/index.ejs');
  });
  router.get('/attribute/text',function(req,res,next){
    res.render('css_test/text_attribute.ejs');
  });
  router.get('/attribute/layout',function(req,res,next){
    res.render('css_test/layout.ejs');
  });
 

};