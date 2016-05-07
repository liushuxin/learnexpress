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
    res.render('full_page/index.ejs');
  });
  //渲染主页面
  router.get('/html1',function(req,res,next){
    res.render('full_page/fullpage.ejs');
  });

};