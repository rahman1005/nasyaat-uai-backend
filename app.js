require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventsRouter = require('./routes/events');
var lembagaRouter = require('./routes/lembaga');
var eventByLembaga = require('./routes/eventByLembaga');
var allEventRouter = require('./routes/allEvents');
var eventsORMAWA = require('./routes/EventORMAWA');
var eventsUKKM = require('./routes/eventUKKM');
var eventsUAI = require('./routes/eventUAI');
var category = require('./routes/category');
var admin = require('./routes/admin');
// var login = require('./routes/login')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/assets', express.static('assets'));
app.use('/events', eventsRouter);
app.use('/lembaga',lembagaRouter);
app.use('/eventbylembaga',eventByLembaga);
app.use('/allevents',allEventRouter);
app.use('/eventormawa', eventsORMAWA);
app.use('/eventukkm',eventsUKKM);
app.use('/eventuai',eventsUAI);
app.use('/category',category);
app.use('/admin',admin);
// app.use('/login', login);

app.use(cors());
module.exports = app;
