/**
 * superagent
 * 客户端请求代理模块。
 * liushuxin@metuan.com
 * 
 */
'use strict';
require.config({
  baseUrl: '/javascripts',
  shim: {
    'lib/bootstrap': {
      deps: ['lib/jquery']
    },
    'lib/bootstrap-datepicker': {
      deps: ['lib/jquery', 'lib/bootstrap']
    },
     'lib/dataTables': {
      deps: ['lib/jquery']
    }
  }
});
require([
  // util
  'lib/jquery',
  'lib/lodash',
  'lib/ractive',
  'lib/superagent',
  'lib/moment',
  //非导出模块。
  'lib/dataTables',
], function($, _, Ractive,request,moment) {
  request.get('/superagent_test/back',function(req,res){
     if (res.ok) {
       alert('yay got ' + JSON.stringify(res.text));
     } else {
       alert('Oh no! error ' + res.text);
     }
   })
})