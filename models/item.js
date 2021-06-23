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