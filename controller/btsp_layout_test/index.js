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
    res.render('btsp_layout_test/index.ejs');
  });

};