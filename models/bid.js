/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    static associate(models) {
      Bid.belongsTo(models.auction, {
        onDelete: 'CASCADE'
      })
      Bid.belongsTo(models.user, {
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
    freezeTableName: true,
    underscored: true
  });
  return Bid;
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("bid", {
    user_id: DataTypes.INTEGER,
    auction_id: DataTypes.INTEGER,
    bidding_price: DataTypes.FLOAT,
    bidding_time: DataTypes.DATE
  }, {
    freezeTableName: true,
    underscored: true
  });
};