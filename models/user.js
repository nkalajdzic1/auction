'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.auction, {
        onDelete: 'CASCADE'
      })
      User.hasMany(models.bid, {
        onDelete: 'CASCADE'
      })
      User.belongsTo(models.location, {
        onDelete: 'CASCADE'
      })
      User.belongsTo(models.paypal, {
        onDelete: 'CASCADE'
      })
      User.belongsTo(models.card, {
        onDelete: 'CASCADE'
      })
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
    modelName: 'user',
    freezeTableName: true,
    underscored: true
  });
  return User;
};