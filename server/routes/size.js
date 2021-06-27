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
    var all = await models.item.findAll({
        attributes: ['size',
            [sequelize.fn('count', sequelize.col('size')), 'item_num'],
        ],
        group: ['size']
    });

    res.json(all)
}

router.get('/all', (req, res) => {
    max_min(req, res)
});

module.exports = router;