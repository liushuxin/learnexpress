/**
 * router 功能
 * 
 */
'use strict';
var express = require('express');
var home = require('x-root-path');
var fs = require('fs');
var home = require('x-root-path');
var Stream = require('stream');
var fs = require('fs');
var bigFile = home+'/controller/ractive_method/index.js';
var Readable = Stream.Readable;
var Writable = Stream.Writable
//双工
var Duplex = Stream.Duplex
var Transform = Stream.Transform
var router = express.Router();
module.exports = function(router){
  //渲染主页面
  router.get('/',function(req,res,next){
    
    res.render('react_method/index.ejs',{
      title:'react测试'
    });
  });
  router.get('/streamText',function(req,res,next){
    fs.createReadStream(bigFile).pipe(process.stdout);
  });



};