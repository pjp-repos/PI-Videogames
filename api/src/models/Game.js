const { DataTypes } = require('sequelize');

module.exports = (dbConn) => {
    dbConn.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

};