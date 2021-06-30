const {
    Sequelize,
    sequelize,
    models
} = require('../database/models');

models.paypal.deleteAll();