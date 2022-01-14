const { DataTypes } = require('sequelize');

module.exports = (dbConn) => {
    dbConn.define('Genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

};