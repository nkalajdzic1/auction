require('dotenv').config();
const Sequelize = require('sequelize');

module.exports = new Sequelize({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  },);

