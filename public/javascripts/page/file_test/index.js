/**
 * 创建新功能的文件系统。
 * liushuxin 2016-4-4
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
  'lib/jquery','lib/lodash','lib/ractive','lib/superagent','lib/numeral','lib/bootstrap'],
  function($, _,Ractive,request,numeral){
    var Page = window.Page ={
      run:function(){
        var self = this;
        self.initEvent();
      },
      initEvent:function(){
        var self = this;
        var $button = $('.sm-bt');
        $(document).on('click','.sm-bt',function(){
          self.initFile();
        })
      },
      initFile:function(){
        var fn = $('#filename').val();
       request
        .get('/file_test/creat_file')
        .query({filename:fn})
        .end(function(error,res){
          if(error || !res.body)return;
          if(res.body === true){
            alert("创建成功，快来刷新试试吧！");
          }
          

        });

      }
    };
    Page.run();
 });
