const express = require('express');
const router = express.Router();
const models = require('../database/models');
const {
    Op
} = require('sequelize');
const {
    sequelize,
    Sequelize
} = require('../database/models');

const max_min = async function (req, res) {
    var max_min = await models.auction.findAll({
        attributes: [
            [sequelize.fn('max', sequelize.col('starting_price')), 'maxPrice'],
            [sequelize.fn('min', sequelize.col('starting_price')), 'minPrice']
        ],
    });

    res.json(max_min[0])
}

router.get('/max_min_price', (req, res) => {
    max_min(req, res)
});

module.exports = router;