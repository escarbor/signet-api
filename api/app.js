global.__basedir = __dirname;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routers = require('./routes/index');
var errorHandler = require('./middleware/errorHandler');
var errorLogger = require('./middleware/logger').logErrors;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/', routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(errorLogger);
app.use(errorHandler);

console.log("API up and running!")
module.exports = app;
