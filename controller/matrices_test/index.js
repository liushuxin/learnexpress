/**
 * router 功能
 * 
 */
'use strict';
var express = require('express');
var fs = require('fs');
var home = require('x-root-path');
var DenseMatrix = require('mathjs/lib/type/matrix/DenseMatrix');
var router = express.Router();
module.exports = function(router){
  //渲染主页面
  router.get('/',function(req,res,next){
    console.log(DenseMatrix.fromJSON([{a:1,b:2}]));
    res.render('matrices_test/index.ejs');
  });

};