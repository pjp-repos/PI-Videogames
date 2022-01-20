const { DataTypes, UUIDV1 } = require('sequelize');

module.exports = (dbConn) => {
    dbConn.define('Game', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV1
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
           notEmpty: true,
        }
      },

      released:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notEmpty: true,
          isDate: true,
       }
      },
      
      rating:{ 
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notEmpty: true,
          isNumeric: true,
          min: 0,
          max: 5
       }
      },

      background_image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          isUrl: true
       }
      },

      description_raw: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [2,255],
       }
      },
  });

};