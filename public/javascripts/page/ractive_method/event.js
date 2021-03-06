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
    },
    'lib/jquery.form':{
      deps: ['lib/jquery']
    }
  }
});
define([
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral',
  'text!template/ractive/compoent.html','lib/bootstrap','lib/jquery.form'],
  function($, _,Ractive,request,numeral,textTpl){
    //$('.dropdown-toggle').dropdown()
    //设置添加事件：
    var page = window.page ={
      init:function(){
        var self = this;
        //新建一个简单的组件demo
        self.createCompoent();
        self.formAjaxSubmit();
      },
      createCompoent:function(){
        var Component = Ractive.extend({
          isolated: true,
          template: textTpl,
          data: {
            text: 'isolated'
          }
        });
        var co1 = new Component({
          el: '.com-test',
          data: {
            text: 'This is a non isolated setting, get it'
          }
        });
        var co2 = new Ractive({
          
        })
      },
      formAjaxSubmit:function(){
/*        $('#sub').click(function(){
          console.log($('#formid').serialize());
          $('#formid').ajaxForm({
          url:'/ractive_method/test2',
          data:$('#formid').serialize(),
          type:'post',
          mimeType:"multipart/form-data",
          dataType:'json',
          resetForm:true,
          success:function(data){
            console.log(data);
          },
          error:function(data){
            alert(data.message);
          }
        });
        });*/
      }

    }
    //执行代码
    page.init();

 });
