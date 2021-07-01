const Sequelize = require('sequelize');
module.exports = new Sequelize(process.env.CLEAR_DATABASE_URL, {
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
//mysql://bf9029dad2acca:82022ccf@eu-cdbr-west-01.cleardb.com/heroku_1532f95a856551d?reconnect=true

enviromental