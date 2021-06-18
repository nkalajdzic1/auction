'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Auction.init({
    item_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    startring_price: DataTypes.FLOAT,
    is_bearing_shipping: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Auction',
  });
  return Auction;
};