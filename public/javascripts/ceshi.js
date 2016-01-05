'use strict';
/**
 * 配置基本库
 * @type {[type]}
 */
require.config({
  baseUrl: '/javascripts',
  shim: {
    'lib/bootstrap': {
      deps: ['lib/jquery']
    },
    'lib/bootstrap-datepicker': {
      deps: ['lib/jquery', 'lib/bootstrap']
    },
     'lib/dataTables': {
      deps: ['lib/jquery']
    }
    
  }
});
require([
  // util
  'lib/jquery',
  'lib/lodash',
  'lib/ractive',
  'lib/dataTables'
], function($, _, Ractive) {
  var reactive1 = Ractive({
    el: '#test-wrapper',
    template: '#array_test',
    data: {
      list: [{
        name: 'foo',
        age: 18
      }, {
        name: 'bar',
        age: 20
      }]
    }
  });
  var reactive2 = Ractive({
    el: '#simple',
    template: '#array_test',
    data: {
      list: [1, 2, 3]
    }
  });

 /* dataTable数据的渲染*/
 var data = [
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
    [
        "Tiger Nixon",
        "System Architect",
        "Edinburgh",
        "5421",
        "2011/04/25",
        "$3,120"
    ],
    [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ],
     [
        "Garrett Winters",
        "Director",
        "Edinburgh",
        "8422",
        "2011/07/25",
        "$5,300"
    ]
]
   $('#table_id').DataTable({
    data:data,
    "aLengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
     "sProcessing": "处理中...",
  "sLengthMenu": "显示 _MENU_ 项结果",
  "sZeroRecords": "没有匹配结果",
  "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
  "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
  "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
  "sInfoPostFix": "",
  "sSearch": "搜索:",
  "oPaginate": {
    "sFirst": "首页",
    "sPrevious": "上页",
    "sNext": "下页",
    "sLast": "末页"
  }
   });
   var dataObj =[
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }
]
      $('#table_id1').DataTable({
     data: dataObj,
     "aLengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
     columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'office' }
    ],
   "sProcessing": "处理中...",
  "sLengthMenu": "显示 _MENU_ 项结果",
  "sZeroRecords": "没有匹配结果",
  "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
  "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
  "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
  "sInfoPostFix": "",
  "sSearch": "搜索:",
  "oPaginate": {
    "sFirst": "首页",
    "sPrevious": "上页",
    "sNext": "下页",
    "sLast": "末页"
  }
   });
  setTimeout(function() {
    reactive1.set('list[0].name', 'lihua');
  },2000);
});