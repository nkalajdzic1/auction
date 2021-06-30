module.exports = function (sequelize, DataTypes) {
  return sequelize.define("location", {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};