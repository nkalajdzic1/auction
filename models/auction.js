/*'usetrict'; s
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auction extends Model {
    static associate(models) {
    }
  };
  Auction.init({
    item_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    starting_price: DataTypes.FLOAT,
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
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("auction", {
    item_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    starting_price: DataTypes.FLOAT,
    is_bearing_shipping: DataTypes.BOOLEAN,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    freezeTableName: true,
    underscored: true
  });
};