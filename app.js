const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRoutes = require('./src/routes/user.route');

require('./src/config/config');

dotenv.config();

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET,
  secure: true,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: true },
}));

app.use(cookieParser());
app.use('/', userRoutes);

module.exports = app;
