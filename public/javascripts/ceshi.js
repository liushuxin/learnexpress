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
    template: '#array_test1',
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
    "aLengthMenu": [
      [5, 10, 15, -1],
      [5, 10, 15, "All"]
    ],
    "language": {
      "sProcessing": "处理中...",
      "sLengthMenu": "显示 _MENU_ 项结果",
      "sZeroRecords": "没有匹配结果",
      "info": "显示第  _PAGE_ 页 ,共 _PAGES_   页",
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
  }
   });
   var dataObj =[
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "望京SOHO",
        "extn":       "5421"

    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    },
     {
        "name":       "Garrett",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    },
     {
        "name":       "lihua",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }, {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    },
     {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    }
];



  $('#table_show').DataTable();
  $('#table_id1').DataTable({
     data: dataObj,
     "aoColumnDefs": [ { "bSortable": false, "aTargets": [0,1] }], 
     "aLengthMenu": [[5, 10, 15, -1], [5, 10, 15, "所有"]],
     columns: [
        { data: 'name',title:"姓名" },
        { data: 'position' ,title:"位置" },
        { data: 'salary' ,title:"薪酬" },
        { data: 'office' ,title:"办公" }
     ],
      "language": {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "info": "显示第  _PAGE_ 页 ,共 _PAGES_ 项",
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
     },
   "columnDefs": [
      {
        // The `data` parameter refers to the data for the cell (defined by the
        // `data` option, which defaults to the column being worked with, in
        // this case `data: 0`.
        "render": function(data, type, row) {
          return '<a href="http://www.baidu.com">' + data + '  ' + row.name + '</a>';
        },
        "targets": 2
      }, {
        "visible": true,
        "targets": [3]
      }
    ],
    scrollY: '20vh',
    scrollX: true,
    scrollCollapse: true,
    paging: true,
    "dom": '<"top"i>rt<"bottom"flp><"clear">'
   });

   $('#table_id1').on( 'order.salary', function () {
    // This will show: "Ordering on column 1 (asc)", for example
      var order = table.order();
      console.log("aaaaa")
      $('#orderInfo').html( 'Ordering on column '+order[0][0]+' ('+order[0][1]+')' );
    } );
  setTimeout(function(){
    reactive1.set('list[0].name', 'lihua');
  },2000);

  //lodash 测试
  var users = [

  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 18 }
];
  var names =_.chain(users).map(function(user){
    return user.user;
  }).join(',').value();
  console.log(names);

  //将数据转化为对象
  var objAge =_.chain(users).map(function(item){
       return [item.user,item.age];
  }).zipObject().value();
  console.log(objAge);
});