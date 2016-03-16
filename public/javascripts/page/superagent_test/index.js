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
  'lib/superagent'
  //非导出模块。
  'lib/dataTables'
], function($, _, Ractive,request) {
  request.get('/superagent_test/back',function(res){
     if (res.ok) {
       alert('yay got ' + JSON.stringify(res.body));
     } else {
       alert('Oh no! error ' + res.text);
     }
  })
}