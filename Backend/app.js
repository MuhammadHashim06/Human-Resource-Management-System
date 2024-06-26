var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getemployee = require('./routes/GetEmployee')
var insertemployee = require('./routes/Insertemployee')
var updateemployee = require('./routes/Updateemployee')
var deleteemployee = require('./routes/Deleteemployee')
var getapplications=require('./routes/getapplications');
var updatestatus=require('./routes/updatestatus');
var addapplications=require('./routes/addapplications');
var getassignments=require('./routes/getassignments');
var attendance=require('./routes/attendance');
var updateassigment=require('./routes/updateassigment');
var getattendence=require('./routes/getattendence');
var assignments=require('./routes/assignments');

var app = express();
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getemployee',getemployee);
app.use('/deleteemployee',deleteemployee);
app.use('/updateemployee',updateemployee);
app.use('/insertemployee',insertemployee);
app.use('/getapplications',getapplications);
app.use('/updatestatus',updatestatus);
app.use('/addapplications',addapplications);
app.use('/getassignments',getassignments);
app.use('/attendance',attendance);
app.use('/updateassigment',updateassigment);
app.use('/getattendence',getattendence);
app.use('/assignments',assignments);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
