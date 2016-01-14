'use strict';
/**
 * 配置基本库
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
  var   data1=[
  {name:'lihua',age:23},
  {name:'asdds',age:33},
  {name:'sdfds',age:44},
  {name:'lihua',age:23},
  {name:'lihua',age:55},
  {name:'lihua',age:66},
];
//遍历每个元素并对其进行操作
$.each(data1,function(key,obj){
      if(obj.name==='lihua'){
        console.log(obj.age);
      }
});
//对数组元素进行过滤，
var result1 = $.grep(data1,function(obj,key){
      if(obj.name == 'lihua'){
        return  obj;
      }
});
//当第三个参数为true时，表示结果取反。
var result2 = $.grep(data1,function(obj,key){
      if(obj.name == 'lihua'){
        return  obj;
      }
},true);
console.log(result1);
console.log(result2);

var obj = $("#main_form").find("input[data_obj]");
  obj.each(function(){

     console.log($(this).attr("data_obj")+":"+$(this).val());
})
console.log(obj);


});