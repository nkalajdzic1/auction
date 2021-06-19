'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item_Category.belongsToMany(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      })
      Item_Category.belongsToMany(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Item_Category.init({
    item_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item_category',
  });
  return Item_Category;
};