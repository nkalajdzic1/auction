'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.item_category, {
        onDelete: 'CASCADE'
      })
      Category.belongsTo(models.category, {
        as: 'parent_category',
        useJunctionTable: false,
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
    freezeTableName: true,
    underscored: true
  });
  return Category;
};