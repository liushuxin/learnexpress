
/**
 * vue 测试
 * @date:2016-09-05
 * @author:刘述新
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
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/vue','lib/bootstrap'],
  function($, _,Ractive,request,numeral,Vue){
    var Page = window.Page ={
      run:function(){
        var self = this;
        self.initVue();
       //写入执行函数
      },
      initVue:function(){
        var self = this;
        new Vue({
          el:'#app',
          data:{
              name:['姓名','lihua'],
              age:['年龄',12]
          }
        });
        new Vue({
          el:'#d1',
          data:{
             items:["北京","上海","广州","深圳"]
          }
        });
        new Vue({
          el:'#d2',
          data:{
           text:"hello, my name is liushuxin"
          },
          methods:{
            reverseText:function() {
              var self = this;
              self.text = self.text.split(' ').reverse().join(' ');
            }
          }
        });

      }
    };
    Page.run();
 });
