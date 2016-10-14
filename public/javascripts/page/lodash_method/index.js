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
  'lib/superagent',
  'lib/numeral',
  'lib/event'
], function($, _,Ractive,request,numeral,EE){
  var Page = window.Page ={
    run:function(){
      var self = this;
      var eventEmitter = new EE.EventEmitter();
      eventEmitter.on('some_event', function() { 
        alert('some_event 事件触发'); 
      }); 
      setTimeout(function() { 
        eventEmitter.emit('some_event'); 
      }, 1000); 
      self.initChart();
      self.getTenDataImtate();
    },
    //初始化折线图
    initChart:function(){
      var self =this;
      request
        .get('/lodash/getChartData')
        .query({name:'lihua'})
        //.set('Accept', 'application/json')
        .end(function(err,res){
           console.log("HHHHHHHHHHHHHH");
          console.log(res.body.data);
          var list = res.body.data;

              self.paintChart(list);
        });
    },
    //绘制折线图
    paintChart:function(list){
      var thead = list.thead;
      var tbody = list.tbody;
      tbody = _.sortBy(tbody,'dt');
      var categories = _.pluck(tbody,'dt');
      categories = _.uniq(categories);
      console.log(categories);
      /**
       * 趋势图y轴的数据。其基本数据格式为：
       * series =[{
       * name:'显示的折线名称'，
       * data:[12,33,44,33,22,11,]//绘制折线的数据，通常和日期的个数一样。
       * }]
       * @type {[object]}
       */
      var  selectedIndex = 'ord_amt';
      var series = _.groupBy(tbody,'first_tag_id_name');
      var result =[];
      console.log(series);
      for(var key in series){
        var ret = {};
        ret.data =_.pluck(series[key],selectedIndex);
        ret.name = key;
        ret.tooltip = {
          shared:false,
                pointFormatter: function() {
                  var point = this;
                  console.log(point);
                  return '<span style="color: ' + point.color + ';">\u25CF</span> ' +
                  point.series.name + ': <b>' + numeral(this.y).format('0,00') + '</b><br/>';
                }
              };

        ret.type = 'spline';
        result.push(ret);
      }
      series = result;
      //获得
      var options = _.merge(_.cloneDeep(defaultChartOptions), {
          title: {
            text: "展示标题"
          },
          series: series,
          xAxis: {
            categories: categories
          }
        });

        $('.chart-wrapper').highcharts(options);
    },
    /**
     * 函数功能 [模拟get Internet data]
     * @date   2016-09-15
     * @author 刘述新
     *  返回值 {[type]}
     */
    getTenDataImtate:function(){
      var self = this;
     


    }

  };
 var defaultChartOptions = {
    credits: false,
    title: {
      text: null
    },
    xAxis: {
      categories: []
    },
    yAxis: [
      // 默认第一条轴
      {
        title: {
          text: null
        }
      },

      // 第二条轴百分比
      {
        opposite: true,
        title: {
          text: null
        },
        labels: {
          formatter: function() {
            return numeral(this.value).format('0.00%');
          }
        }
      }
    ],
    tooltip: {
      shared: true,//是否共享，共享后当鼠标滑到节点后。
      //当为true时，则会将x轴上同一节点的数据，都显示在提示信息上。
      //当为false时，则每个节点只显示自己节点的数据。
      crosshairs: [true, true] //该属性当为true时，会有一条半透明的竖线轴，这个属性多于shared：true，一起使用。
    }
  };
  //初始化工程。
Page.run();
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
 

});