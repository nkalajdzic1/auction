'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.hasMany(models.Item_Category, {
        foreignKey: 'item_id'
      })
      Item.hasOne(models.Auction, {
        foreignKey: 'item_id'
      })
    }
  };
  Item.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    item_picture: DataTypes.BLOB,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
  });
  return Item;
};