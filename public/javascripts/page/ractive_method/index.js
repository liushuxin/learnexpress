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
    //设置添加事件：
    var page = window.page ={
      init:function(){
        var self = this;
        //新建一个简单的组件demo
        self.createCompoent();
      },
      createCompoent:function(){
        var Component = Ractive.extend({
          isolated: false,
          template: '#component'

        });
        Ractive({
          el: '.com-test',
          template: '#template',
          data: {
            nonIsolatedSetting: 'This is a non isolated setting, get it anywhere'
          },
          components: { Component: Component }
        });
        Ractive({
          el: '.com-test1',
          template: '#template',
          data: {
            nonIsolatedSetting: '这是一个扩展性很高的组件，你可以在任何地方使用它'
          },
          components: { Component: Component }
        });
      }
    }
    //执行代码
    page.init();
    $(document).on('click','.modal-footer .btn-primary',function(){
      var isOk = true;
      if(isOk){
        $('#myModal').modal('hide');
         $('.alert-danger').html('')
      }else{
        $('.alert-danger').html('输入不合法')
      }
     
    })
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
