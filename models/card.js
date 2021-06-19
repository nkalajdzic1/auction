'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.hasOne(models.User, {
        foreignKey: 'card_id'
      })
    }
  };
  Card.init({
    name_on_card: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    cvc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'card',
  });
  return Card;
};