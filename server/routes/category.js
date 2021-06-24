const express = require('express');
const router = express.Router();
const models = require('../database/models');
const {
    Op
} = require('sequelize');
const {
    sequelize
} = require('../database/models');


router.get('/parent_categories', (req, res) => {
    models.category.findAll({
        where: sequelize.where(
            sequelize.col('id'),
            sequelize.col('parent_category_id')
        ),
        attributes: ['id', 'name']
    }).then(x => res.json(x)).catch(err => res.json(err));
});


module.exports = router;