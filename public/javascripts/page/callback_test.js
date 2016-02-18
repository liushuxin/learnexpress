'use strict';
/**
 * 配置基本库
 * @type {[type]}
 */
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
  'lib/dataTables'
], function($, _, Ractive,request) {


   

 

request
   .get('/getCallBacks')
   .end(function(err,res){
    console.log(res.xhr.responseText);
    var data =JSON.parse(res.xhr.responseText);
    console.log(data[0])
    //模板渲染
 var reactive1 = new Ractive({
      el: '#chart_bar',
      template: '#array_test',
      data:{list:data}
    });
 var reactive2 = new Ractive({
      el: '#str_data',
      template: '#str_ann',
      data:{list:res.xhr.responseText}
    });

   });


});