//  === Imports ===========================================
// - Packages ----
require('dotenv').config(); // Import .env settings
const { Sequelize } = require('sequelize'); // Orm Sequelize

// - Model templates ----
const modelTemplateGame = require('./models/Game');
const modelTemplateGenre = require('./models/Genre');
const modelTemplatePlatform = require('./models/Platform');

const modelTemplateGameGenre = require('./models/Game_Genre');
const modelTemplateGamePlatform = require('./models/Game_Platform');
//  =======================================================

// Settings from .env file
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

// Connection string
const dbConn = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  define: {
    timestamps: true,
    freezeTableName: true
  },
});

// Inject db connection to all model templates
// Create models: modelTemplate(databaseConnection) = model
// After models are created, they are automatically stored in databaseConnection.models.
modelTemplateGame(dbConn);
modelTemplateGenre(dbConn);
modelTemplatePlatform(dbConn);
modelTemplateGameGenre(dbConn);
modelTemplateGamePlatform(dbConn);

// Models destructuring from databaseconnections.models
const { 
  Game, 
  Genre, 
  Platform, 
  Game_Genre,
  Game_Platform,
} = dbConn.models;

// GameGenre - Join table - ManyToMay Game<->Genre relationship setup
Game.belongsToMany(Genre,{through: Game_Genre, as: 'genres' });  // Create Foreing key Game(1)->Game_Genre(n)= Game_Genre.GameId
Genre.belongsToMany(Game,{through: Game_Genre, as: 'games'});  // Create Foreing key Genre(1)->Game_Genre(n)= Game_Genre.GenreId

// GamePlatform - Join table - ManyToMay Game<->Platform relationship
Game.belongsToMany(Platform,{through: Game_Platform, as: 'platforms'});
Platform.belongsToMany(Game,{through: Game_Platform, as: 'games'});

module.exports = {
  ...dbConn.models, // This is to require and use in express server. Ex: const { Game, Genre } = require('./db.js');
  dbConn:dbConn,  // This is to require and make synchronism whith database
};
