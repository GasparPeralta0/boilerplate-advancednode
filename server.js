'use strict';
require('dotenv').config();

const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

/* ---------- PUG CONFIG ---------- */
app.set('view engine', 'pug');
app.set('views', process.cwd() + '/views/pug');

/* ---------- FCC TESTING ---------- */
fccTesting(app);

/* ---------- MIDDLEWARE ---------- */
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- ROUTES ---------- */
app.get('/', function (req, res) {
  res.render('index', {
    title: 'Hello from Pug',
    message: 'Rendering with Pug!',
    showLogin: true,
    showRegistration: true,
    showSocialAuth: true
  });
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});

module.exports = app;