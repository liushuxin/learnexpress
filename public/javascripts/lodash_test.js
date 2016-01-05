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
  'lib/highcharts'
], function($, _,Ractive) {


	//摘取相应列的数据
	var arr = [
  { dt: '20151101', age:2 },
  { dt: '20151102',  age:2 },
  { dt: '20151103',  age:2 },
  { dt: '20151104',  age:2 }
];
var dt =_.pluck(arr,'dt');
console.log(dt);
//
var arr1 = [
  { key: 'ord_amt', text: '交易额' },
  { key: 'ord_amt1', text: '交易额1' },
  { key: 'ord_amt2', text: '交易额2' },
  { key: 'ord_amt2', text: '交易额3' },
  { key: 'ord_amt2', text: '交易额4' },
  { key: 'ord_amt2', text: '交易额5' }
];
var ord =_.find(arr1, function(item){ return item.key === 'ord_amt2' });
console.log(ord);
var arr2 = [ 
  { id: 1, group_id: 1 },
  { id: 2, group_id: 2 },
  { id: 3, group_id: 1 },
  { id: 4, group_id: 2 } 
];

var group =_.groupBy(arr2, 'group_id')
console.log(group);

console.log($);

$('#chart_line').highcharts({
        title: {
            text: '月平均温度',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'horizontal',
            align: 'middle',
            verticalAlign: 'bottom',
            borderWidth:0,
             x: 300, 
            y: 20
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});