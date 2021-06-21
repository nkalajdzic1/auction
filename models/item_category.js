/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Category extends Model {
    static associate(models) {

    }
  };
  Item_Category.init({
    item_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item_category',
    freezeTableName: true,
    underscored: true
  });
  return Item_Category;
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("item_category", {
    item_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    underscored: true
  });
};