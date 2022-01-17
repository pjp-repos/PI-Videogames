const { DataTypes } = require('sequelize');

// GameGenre - Join table - ManyToMay Game<->Genre relationship
module.exports = (dbConn) => {
    dbConn.define('Game_Genre', {
        // Attributes
        comment: DataTypes.BOOLEAN,
        extra: DataTypes.STRING
    },{ 
        // options
        timestamps: false 
    });
};