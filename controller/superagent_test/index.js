/**
 * 客户端请求代理模块测试
 */
'use strict';
var express = require('express');
var moment = require('moment');
var momentrange = require('moment-range');
var _ =require('lodash');
var router = express.Router();


module.exports = function(router) {
    //进入登录界面
  router.get('/', function(req, res, next) {
   res.render('superagent_test/index');
  });
  router.get('/back', function(req, res, next) {
    console.log('WWWWWWWWWWWWWWWWWWWWWWWWW');
  var data =[
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": -1,
          "category_name": "全部",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.3094,
          "dt": "20160308"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": -1,
          "category_name": "全部",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.3195,
          "dt": "20160311"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": -1,
          "category_name": "全部",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.3188,
          "dt": "20160312"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": -1,
          "category_name": "全部",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.3224,
          "dt": "20160313"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": -1,
          "category_name": "全部",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.3101,
          "dt": "20160314"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0382,
          "dt": "20160308"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0414,
          "dt": "20160309"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0434,
          "dt": "20160311"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0415,
          "dt": "20160312"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0407,
          "dt": "20160313"
        },
        {
          "client_key": 10038,
          "client_name": "APP全部",
          "category_key": 10004,
          "category_name": "送药",
          "is_holiday": false,
          "festival_name": "",
          "of_p_category": 0.0459,
          "dt": "20160314"
        }
      ];
  var fenzu = _.groupBy(data,'category_name');
  for(var key in fenzu){
    var dates = _.pluck(fenzu[key],'dt');
    var start = new Date(2016, 2, 8);
    var end   = new Date(2016, 2, 14);
    var range1 = moment.range(start, end);
    var  arrDate =range1.toArray('days');
    //遍历每一个moment对象，并取出数据
    var arrdate = _.map(arrDate,function(eachMoment){
      return moment(eachMoment).format('YYYYMMDD');
   });
    //获得不同的时间
    var diffDate = _.difference(arrdate, dates);
    _.forEach(diffDate,function(item){
      //构造数据
      var temp = _.cloneDeep(fenzu[key][0]);
          temp.dt =item;
          temp['of_p_category'] =0;
      fenzu[key].push(temp);
    });
  }
     console.log(range1);
    res.send(range1);
  });
}