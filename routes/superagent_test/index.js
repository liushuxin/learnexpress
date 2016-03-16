/**
 * 客户端请求代理模块测试
 */
'use strict';
var express = require('express');
var router = express.Router();


module.exports = function(router) {
    //进入登录界面
router.get('/', function(req, res, next) {
  res.render('superagent_test/index');
});
}