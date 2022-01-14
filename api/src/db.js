//  === Imports ===========================================
// - Packages ----
require('dotenv').config(); // Import .env settings
const { Sequelize } = require('sequelize'); // Orm Sequelize

// - Models ----
const modelGame = require('./models/Game');
const modelGenre = require('./models/Genre');
const modelPlatform = require('./models/Platform');
//  =======================================================

// Settings from .env file
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// Connection string
const dbConn = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

// Inject db connection to all models
modelGame(dbConn);
modelGenre(dbConn);
modelPlatform(dbConn);

// Models destructuring
const { Game, Genre, Platform } = dbConn.models;

// Constraints Ex: Product.hasMany(Reviews);

module.exports = {
  ...dbConn.models, // This is to require and use in express server. Ex: const { Game, Genre } = require('./db.js');
  dbConn:dbConn,  // This is to require and make synchronism whith database
};
