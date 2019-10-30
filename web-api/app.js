var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var examplesRouter = require('./routes/examples');
var cursadasRouter = require('./routes/cursadas');
var materiasRouter = require('./routes/materias');
var aulasRouter = require('./routes/aulas');
var docentesRouter = require('./routes/docentes');
var cursada_docenteRouter = require('./routes/cursada_docente');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Controlers
app.use('/', indexRouter);
app.use('/examples', examplesRouter);
app.use('/cursadas', cursadasRouter);
app.use('/materias', materiasRouter);
app.use('/aulas', aulasRouter);
app.use('/docentes', docentesRouter);
app.use('/cursada_docente', cursada_docenteRouter);

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
