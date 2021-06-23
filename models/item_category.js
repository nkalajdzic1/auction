module.exports = function (sequelize, DataTypes) {
  return sequelize.define("item_category", {
    item_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    freezeTableName: true,
    underscored: true
  });
};