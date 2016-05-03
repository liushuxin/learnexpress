
/**
 * full-page 练习
 * @date:2016-05-02
 * @author:liushuxin
 * 
 */
'use strict';
require.config({
  baseUrl:'/javascripts',
  shim: {
    'lib/bootstrap': {
      deps: ['lib/jquery']
    },
    'lib/jquery.fullPage': {
        deps: ['lib/jquery']
    }
  }
});
define([
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/bootstrap','lib/jquery.fullPage'],
  function($, _,Ractive,request,numeral,B,fullpage){
    var Page = window.Page ={
      run:function(){
        var self = this;
       //写入执行函数
      }
    };
    Page.run();
 });
