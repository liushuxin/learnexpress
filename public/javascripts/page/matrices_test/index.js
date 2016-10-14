
/**
 * 写入文件功能
 * @date:2016-10-11
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
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/math','lib/bootstrap'],
  function($, _,Ractive,request,numeral,math){
    var Page = window.Page ={
      run:function(){
        var self = this;
        console.log(math.sqrt(-4));
       //写入执行函数
       var self = this;
       self.jisuan();
      },
      jisuan:function(){
        var array = [[2, 0], [-1, 3]];
        console.log(math.square(array));  
        var array1 =[ {dt:"1",org:"大连1",a:1,b:21,c:31},
                      {dt:"2",org:"大连2",a:12,b:22,c:32},
                      {dt:"3",org:"大连3",a:13,b:23,c:33},
                      {dt:"4",org:"大连4",a:14,b:24,c:34},
                      {dt:"5",org:"大连5",a:15,b:25,c:35},
                  ];
                 var dm =math.matrix('dense');
                 console.log(math.matrix.DenseMatrix);
                  var m = dm.fromJSON([ {dt:"1",org:"大连1",a:1,b:21,c:31},
                      {dt:"2",org:"大连2",a:12,b:22,c:32},
                      {dt:"3",org:"大连3",a:13,b:23,c:33},
                      {dt:"4",org:"大连4",a:14,b:24,c:34},
                      {dt:"5",org:"大连5",a:15,b:25,c:35},
                  ]);
                   //var dm =m.DenseMatrix();
                  console.log(m);

      }
    };
    Page.run();
 });
