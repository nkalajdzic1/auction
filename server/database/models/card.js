module.exports = function (sequelize, DataTypes) {
  return sequelize.define("card", {
    name_on_card: DataTypes.STRING,
    card_number: DataTypes.STRING,
    expiration_date: DataTypes.STRING,
    cvc: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};