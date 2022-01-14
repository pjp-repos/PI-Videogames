const { DataTypes } = require('sequelize');

module.exports = (dbConn) => {
    dbConn.define('Platform', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

};