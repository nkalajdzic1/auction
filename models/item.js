'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.hasMany(models.item_category, {
        onDelete: 'CASCADE'
      })
      Item.hasMany(models.item_picture, {
        onDelete: 'CASCADE'
      })
      Item.hasOne(models.auction, {
        foreignKey: 'item_id',
        as: 'item_auction_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Item.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
    freezeTableName: true,
    underscored: true,
  });
  return Item;
};