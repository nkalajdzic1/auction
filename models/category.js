'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Item_Category, {
        foreignKey: 'category_id'
      })
      Category.hasMany(models.Category, {
        foreignKey: 'category_id'
      })
      Category.belongsToMany(models.Category, {
        foreignKey: 'category_id',
        onDelete: 'CASCADE'
      })
    }
  };
  Category.init({
    parent_category_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
  });
  return Category;
};