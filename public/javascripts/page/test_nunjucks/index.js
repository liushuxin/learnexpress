
/**
 * 写入文件功能
 * @date:2016-04-19
 * @author:
 * 
 */
'use strict';
require.config({
  baseUrl:'/javascripts',
  shim: {
    'lib/bootstrap': {
      deps: ['lib/jquery']
    }
  }
});
define([
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/bootstrap'],
  function($, _,Ractive,request,numeral){
    var Page = window.Page ={
      run:function(){
        var self = this;
       //写入执行函数
      }
    };
    Page.run();
 });
