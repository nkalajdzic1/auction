/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.hasMany(models.item_category, {
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
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("item", {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    size: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};