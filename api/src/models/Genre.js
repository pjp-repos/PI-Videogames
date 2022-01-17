const { DataTypes } = require('sequelize');

module.exports = (dbConn) => {
    dbConn.define('Genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

};