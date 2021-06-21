/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.hasOne(models.user, {
        onDelete: 'CASCADE'
      })
    }
  };
  Card.init({
    name_on_card: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
    cvc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'card',
    freezeTableName: true,
    underscored: true
  });
  return Card;
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("card", {
    name_on_card: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
    cvc: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};