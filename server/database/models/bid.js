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