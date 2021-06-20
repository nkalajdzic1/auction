'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Picture extends Model {
    static associate(models) {
      Item_Picture.belongsTo(models.item, {
        onDelete: "CASCADE"
      })
    }
  };
  Item_Picture.init({
    item_id: DataTypes.INTEGER,
    is_main_picture: DataTypes.BOOLEAN,
    picture: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'item_picture',
    freezeTableName: true,
    underscored: true
  });
  return Item_Picture;
};