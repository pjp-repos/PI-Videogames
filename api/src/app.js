// ========================  REQUIRES =====================================
// -Packages----
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// -Routes---
const videogamesRouter = require('./routes/videogamesRouter');
const videogameRouter = require('./routes/videogameRouter');
const genresRouter = require('./routes/genresRouter');
const platformsRouter= require('./routes/platformsRouter');

// // - Database ---
// require('./db.js');

// =========================================================================

// - Server definition ---
const server = express();
server.name = 'API';

// - Middlewares ---
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
// server.use(express.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// - Routes ---
server.use('/videogames', videogamesRouter);
server.use('/videogame', videogameRouter);
server.use('/genres', genresRouter);
server.use('/platforms', platformsRouter);

// - Error catching endware ---
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
