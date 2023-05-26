const dotenv = require('dotenv');
const express = require('express');
const http = require('http');
const logger = require('morgan');
const path = require('path');
const router = require('./routes/index');
const { auth } = require('express-openid-connect');
const cors=require('cors');

dotenv.load();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const config = {
  baseURL: `${process.env.BASE_URL}`,
  attemptSilentLogin: false,
  authRequired: false,
  idpLogout: true,
  auth0Logout: true
};

const port = process.env.PORT || 3000;


app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.get('/user', function (req, res, next) {
  res.json(req.oidc.user);
});
app.use('/', router);


// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on http://localhost:5000`);
  });
