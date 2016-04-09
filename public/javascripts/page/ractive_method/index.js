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
        self.initTable();
        self.testContent();
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
      },
      initTable:function(){
        //数据
        var xmen = [
          { name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
          { name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
          { name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
          { name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
        ];
        var ractive = new Ractive({
          el: '.output',
          template: $('#template1').html(),
          data: {
            superheroes: xmen,
            sort: function ( array, sortColumn ) {
              // add sorting logic here
              return array;
            }
          }
        });

        ractive.on( 'sort', function ( event, column ) {
          alert( 'Sorting by ' + column );
        });
        ractive.on('active',function(){
          alert('Activating!');
        });
       
      },
      testContent:function(){
        var ractive = new Ractive({
          el:'.contentEle',
          template:$('#contentEle').html(),
          data:{
            content:'<p>你好，内容！</p>'
          }
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
