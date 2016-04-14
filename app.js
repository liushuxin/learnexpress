var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var enrouten = require('express-enrouten');
var cons = require('consolidate');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'templates'));//存放模板文件的路径。
app.set('view engine', 'ejs');//视图模板引擎
// Template Engine: nunjucks
app.engine('nunjucks', cons.nunjucks);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/// dynamically include controllers
app.use(enrouten({
  directory: 'controller'
}));
app.use(express.static(path.join(__dirname, 'public')));//static 提供了静态文件支持

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(req, res, next) {
  var err = new Error('网页未找到');
  err.status = 404;
  res.type('html');
  res.render('buildin/error', {
    message: err.message,
    error: {}
  });
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
