module.exports = function (sequelize, DataTypes) {
  return sequelize.define("category", {
    parent_category_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};