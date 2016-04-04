'use strict';
/**
 * ractive双向数据绑定。前端MVVM框架。
 * @type {[type]}
 */
require.config({
  baseUrl:'/javascripts',
  shim: {
      'lib/highcharts': {
      deps: ['lib/jquery']
    },
    'lib/bootstrap': {
      deps: ['lib/jquery']
    }
  }
});
define([
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/bootstrap'],
  function($, _,Ractive,request,numeral){
    //$('.dropdown-toggle').dropdown()
   var ract1 = Ractive({
    el:'.ract-main-wrapper',
    template:'#main-template-01',
    data:{
      name:'lili',
      text:''
    }
   });
   var ractive = Ractive({
    el:'.main-drop-wrapper',
    template:'#dropdown-main-template',
    data:{
      searchText:'',
      list:'初始值'
    }
   });
   var i =0;
   ractive.observe('searchText',_.debounce(function(searchText){

  var list = searchText +':'+(++i);
   ractive.set('list', list);
   },1000,{

   }));
   
console.log(ractive.node);
   setTimeout(function(){
    ract1.set('name','liushxin');
   },1000);
   

 });
