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
      Auction.hasMany(models.Bid, {
        foreignKey: 'auction_id'
      })
      Auction.belongsToMany(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE'
      })
      Auction.belongsToMany(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
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
    modelName: 'auction',
  });
  return Auction;
};