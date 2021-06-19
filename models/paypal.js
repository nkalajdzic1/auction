'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paypal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Paypal.hasOne(models.User, {
        foreignKey: 'paypal_id'
      })
    }
  };
  Paypal.init({
    credentials: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paypal',
  });
  return Paypal;
};