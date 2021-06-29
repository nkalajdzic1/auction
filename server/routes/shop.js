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

router.post('/items', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;