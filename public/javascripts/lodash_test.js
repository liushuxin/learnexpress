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
    },
    'module/funnel': {
      deps: ['lib/highcharts']
    }
  }
});

define([
  'lib/jquery',
  'lib/lodash',
  'lib/numeral',
   'module/funnel',
  'lib/highcharts'
 
], function($, _,numeral,fun,highcharts) {


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
var category =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var group =_.groupBy(arr2, 'group_id')
console.log(group);

console.log($);
//折线图
$('#chart_line').highcharts({
        chart: {
            type: "spline",
            style: {
                fontFamily: "",
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#006cee'
            },
            zoomType:'xy'
        },

        title: {
            text: '月平均温度',
            x: -20 ,//center
            useHTML:true,
            style:{
                color:'gold'
            }
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories:category,
            //gridLineWidth:'1',
            //gridLineDashStyle:'Dash',
        },
        yAxis: {
            title: {
                text: '温度 (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            shared:true,
            crosschairs:true,
            valueSuffix: '°C',
            //backgroundColor: '#FCFFC5', // 背景颜色
            //borderColor: 'black', // 边框颜色
            borderRadius: 10, // 边框圆角
            borderWidth: 3, // 边框宽度
            shadow: true, // 是否显示阴影
            animation: true, // 是否启用动画效果
            style: { // 文字内容相关样式
             //   color: "#ff0000",
                fontSize: "12px",
                fontWeight: "blod",
                fontFamily: "Courir new"
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'middle',
            verticalAlign: 'bottom',
            borderWidth:0,
            x: 300, 
            y: 20
        },
        series: [
            
        {
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
             
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
       
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
            
        }]
    });

//bar 图
$('#chart_bar').highcharts({
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
$('#chart_pyramid').highcharts({
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'Sales pyramid',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits',      15654],
                ['Downloads',            4064],
                ['Requested price list', 1987],
                ['Invoice sent',          976],
                ['Finalized',             846]
            ]
        }]
    });
var page =window.page ={
        backdata: {

            "data": {
                "dataList": [{
                    "org_name": "外卖总部1",
                  
                    "txn_poi_num": "964956"
                    
                }, {
                    "org_name": "外卖总部2",
                    
                    "txn_poi_num": "484886"
                   
                }, {
                    "org_name": "外卖总部3",
                    
                    "txn_poi_num": "989660"
                   
                }, {
                    "org_name": "外卖总部4",
                    
                    "txn_poi_num": "165282"
                   
                }, {
                    "org_name": "外卖总部5",
                   
                    "txn_poi_num": "53916"
                }]
              
            }
        },
        paintFunnel:function(){
            var data =this.backdata;
            var series = this.handleFunnelData(data);
            var dataLength = series.length;
            var dataList = series.data;
            let seriesList = _.map(dataList,function(item,index,array){
   
                return {name:item[0],
                        y:numeral(1),
                        id:item[1]
            };


            });
            
            var chart = $('#funnelDom').highcharts({
                chart: {
                    type: 'funnel',
                    marginRight: 100,
                    marginBottom:50
                },
                title: {
                    text: '访问分析概览',
                    x: -50
                },
                plotOptions: {
                    series: {
                        neckWidth: '4%',
                        neckHeight: '0%'
                    },
                    funnel:{
                        dataLabels:{
                            enabled:false
                        },
                        showInLegend:true,
                        borderWidth:10

                    }
                },
                 legend: {
                    layout: 'horizontal',
                    align: 'middle',
                    verticalAlign: 'bottom',
                  
                    lineHeight:30,
                    x: 0, 
                    y: 0
                },
                credits: false,
                exporting: false,
                series: [{
                    name: series.name,
                    colors:series.colors,
                    data:seriesList,
                    tooltip:{
                        pointFormatter:function(){
                            console.log(this);
                            return dataList[this.index][1].format('0,0');
                        }
                       
                    }
                   
                }]
            });
        },
        handleFunnelData:function(funnelData){
             let self = this;
    let dataList =[];
    let showData =[];
   
      dataList = funnelData.data.dataList;
      _.forEach(dataList,(item)=>{
        showData.push([item.org_name,numeral(item.txn_poi_num)]);
      });
    let result ={
      length:dataList.length,
      name:'访问分析',
      colors:['#FDA761','#28D1DA','#B5D4FD','#EE9C9F','#ACDFD0','#0f0','#EE9C9F','ACDFD0','#0f0'],
       data: showData
      
    }
    return result;
        }
}
page.paintFunnel();
});
