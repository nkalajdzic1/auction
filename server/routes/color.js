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

router.get('/all', (req, res) => {
    models.item.findAll({
        attributes: ['color']
    }).then(x => res.json(x)).catch(err => res.json(err));
});

module.exports = router;