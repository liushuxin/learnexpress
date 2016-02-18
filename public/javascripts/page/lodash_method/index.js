'use strict';
/**
 * lodash常用方法测试&总结
 * @type {[type]}
 */
require.config({
  baseUrl:'/javascripts',
  shim: {
      'lib/highcharts': {
      deps: ['lib/jquery']
    }
  }
});

define([
  'lib/jquery',
  'lib/lodash',
  'lib/highcharts',
  'lib/superagent'
], function($, _,Ractive,request) {
  var data1 = [{
    name: 'lihua',
    age: 23
  }, {
    name: 'asdds',
    age: 33
  }, {
    name: 'sdfds',
    age: 44
  }, {
    name: 'lihua',
    age: 23
  }, {
    name: 'lihua',
    age: 55
  }, {
    name: 'lihua',
    age: 66
  }, ];
  //chunk方法
var arr1 =[1,2,3,44,3,22,1,'q','sd','df'];
var result1 =_.chunk(arr1,3);
console.log(result1);
  //compact 方法
  var arr2 =[1,'cat','',false,'pig',33,44,NaN,undefined,null,0]
  var result2 =_.compact(arr2);
  console.log(result2);
  var result3=_.concat()

});