'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    static associate(models) {
      Auction.hasMany(models.bid, {
        onDelete: 'CASCADE'
      })
      Auction.belongsTo(models.item, {
        foreignKey: 'id',
        as: 'item_auction_id',
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
    freezeTableName: true,
    underscored: true
  });
  return Auction;
};