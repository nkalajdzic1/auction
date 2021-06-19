'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bid.belongsToMany(models.Auction, {
        foreignKey: 'auction_id',
        onDelete: 'CASCADE'
      })
      Bid.belongsToMany(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Bid.init({
    user_id: DataTypes.INTEGER,
    auction_id: DataTypes.INTEGER,
    bidding_price: DataTypes.FLOAT,
    bidding_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'bid',
  });
  return Bid;
};