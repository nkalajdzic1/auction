/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      Location.hasOne(models.user, {
        onDelete: 'CASCADE'
      })
    }
  };
  Location.init({
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'location',
    freezeTableName: true,
    underscored: true
  });
  return Location;
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("location", {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};