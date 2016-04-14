/**
 * 登录功能实现
 */
'use strict';
var home = require('x-root-path');
var request = require('superagent');
var _ = require('lodash');
//设置路由
module.exports = function(router) {
    //进入登录界面
    router.get('/',function(rep,res,next){
        res.render('login_in/index.ejs',{
            'name':'lihua',
            'age':13
        });
    });
}