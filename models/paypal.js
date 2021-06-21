/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paypal extends Model {
    static associate(models) {
      Paypal.hasOne(models.user, {
        onDelete: 'CASCADE'
      })
    }
  };
  Paypal.init({
    credentials: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paypal',
    freezeTableName: true,
    underscored: true
  });
  return Paypal;
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("paypal", {
    credentials: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};