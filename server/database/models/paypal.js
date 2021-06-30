module.exports = function (sequelize, DataTypes) {
  return sequelize.define("paypal", {
    credentials: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};