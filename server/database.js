const Sequelize = require('sequelize');
module.exports = new Sequelize('heroku_1532f95a856551d', 'bf9029dad2acca', '82022ccf', {
    host: "eu-cdbr-west-01.cleardb.com",
    dialect: "mysql",
    operatorAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});