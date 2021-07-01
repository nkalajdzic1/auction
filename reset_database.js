const {
    Sequelize,
    sequelize,
    models
} = require('/server/database/models/index.js');

models.paypal.deleteAll();