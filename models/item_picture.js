/*'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_Picture extends Model {
    static associate(models) {
      Item_Picture.belongsTo(models.item, {
        foreignKey: 'item_id',
        targetKey: 'id',
        as: 'itemPicture',
        onDelete: 'CASCADE'
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
};*/

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("item_picture", {
    item_id: DataTypes.INTEGER,
    is_main_picture: DataTypes.BOOLEAN,
    picture: DataTypes.BLOB('long')
  }, {
    freezeTableName: true,
    underscored: true
  });
};