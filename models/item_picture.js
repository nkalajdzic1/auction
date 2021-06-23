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