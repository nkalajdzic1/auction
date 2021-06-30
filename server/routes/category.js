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


router.get('/parent_categories', (req, res) => {
    models.category.findAll({
        where: sequelize.where(
            sequelize.col('id'),
            sequelize.col('parent_category_id')
        ),
        attributes: ['id', 'name']
    }).then(x => res.json(x)).catch(err => res.json(err));
});

router.get('/categories', (req, res) => {
    models.category.findAll({
        include: [{
            model: models.category,
            as: "category_category",
            include: [{
                model: models.item_category,
                as: "category_item",
                attributes: ['id'],
                include: [{
                    model: models.item,
                    attributes: ['color', 'size']
                }],
            }],
            attributes: ['id', 'parent_category_id', 'name'],
        }],
        where: {
            id: {
                [Op.like]: sequelize.col('category.parent_category_id')
            }
        },
        attributes: ['id', 'name'],
        // group: ['category_category.id', 'category_category.category_item.item.id']
    }).then(x => res.json(x)).catch(err => res.json(err));
});


module.exports = router;