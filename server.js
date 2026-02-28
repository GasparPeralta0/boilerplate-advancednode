'use strict';
 require('dotenv').config();
const express = require('express');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// 1) motor de vistas pug
app.set('view engine', 'pug');

// 2) carpeta de vistas (IMPORTANTE: process.cwd())
app.set('views', process.cwd() + '/views/pug');

fccTesting(app); // For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.get('/', function (req, res) {
  // renderiza views/pug/index.pug
  res.render('index');
});

 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

module.exports = app;