'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    location_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER,
    paypal_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    profile_picture: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};