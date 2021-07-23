module.exports = function (sequelize, DataTypes) {
  return sequelize.define("user", {
    location_id: DataTypes.INTEGER,
    is_third_party_user: DataTypes.BOOLEAN,
    card_id: DataTypes.INTEGER,
    paypal_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    gender: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    profile_picture: DataTypes.BLOB,
    third_party_profile_picture_url: DataTypes.STRING
  }, {
    freezeTableName: true,
    underscored: true
  });
};