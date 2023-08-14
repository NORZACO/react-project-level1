require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require("express-session");
const flash = require('express-flash');
const bodyParser = require("body-parser");
const passport = require('passport');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const climatesRouter = require('./routes/climates');
const productsRouter = require('./routes/products');
const preDataRouter = require("./routes/preData")

// authentic router
const authsRouter = require('./routes/auths')


const app = express();
const db = require('./models');

// db.sequelize.sync({ force: true }).then(() => {
//   //logo
//   console.log(`
//   ------------------------------------------------------------------
//   |     ALL DATABASE TABLES HAVE BEEN SUCCESSFULLY SYNCRONISE       |
//   ------------------------------------------------------------------
//   `)
// })

db.sequelize.sync({ force: false }).then(() => {
}).then(() => {
  // logo
  console.log(`
  ------------------------------------------------------------------
  |     ALL DATABASE TABLES HAVE BEEN SUCCESSFULLY SYNCRONISE       |
  ------------------------------------------------------------------
  `)
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
// app.use(passport.session());


// Configure session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  // store: new FileStore(
  //     {
  //         path: path.join(__dirname, '/tmp/sessions'),
  //         encrypt: true
  //     }
  // ),
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


// app.use(
//   cors(
//     {
//       origin: 'http://localhost:3000',
//       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     }
//   ));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE" // what matters here is that OPTIONS is present
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization", "Access-Control-Allow-Origin");
  next();
});


app.use('/api/v1', indexRouter);
app.use('/api/v1', usersRouter);
app.use('/api/v1', climatesRouter);
app.use('/api/v1', productsRouter);
app.use('/api/v1', authsRouter);
app.use('/api/v1', preDataRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
