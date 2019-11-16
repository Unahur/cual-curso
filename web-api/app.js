var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
// var examplesRouter = require('./routes/examples');
var estudiantesRouter = require('./routes/estudiantes');
var carrerasRouter = require('./routes/carreras');
var materiasRouter = require('./routes/materias');
var docentesRouter = require('./routes/docentes');
var aulasRouter = require('./routes/aulas');
var estudiante_cursadasRouter = require('./routes/estudiante_cursadas');
var cursadasRouter = require('./routes/cursadas');
var cors = require('cors')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Habilito CORS en forma irrestricta (permito el consumo de la API sin importar el dominio del cliente)
// https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS
// Esto agrega el siguiente encezado a la respuesta: Access-Control-Allow-Origin: *
// De esta manera estoy generando un hueco de seguridad, que debería resolver antes de llevar esta aplicación a un ambiente productivo.
app.use(cors());

app.use('/', indexRouter);
// app.use('/examples', examplesRouter);
app.use('/estudiantes',estudiantesRouter);
app.use('/carreras', carrerasRouter);
app.use('/materias', materiasRouter);
app.use('/docentes', docentesRouter);
app.use('/aulas', aulasRouter);
app.use('/estudiante_cursadas', estudiante_cursadasRouter);
app.use('/cursadas', cursadasRouter);

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
