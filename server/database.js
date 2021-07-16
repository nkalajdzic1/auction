const Sequelize = require('sequelize');
module.exports = new Sequelize( /*process.env.CLEAR_DATABASE_URL ||*/ 'mysql://Admin:admin@localhost/auctiondb', {
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});