const express = require('express');
const router = express.Router();
const models = require('../../models');
const {
    Op
} = require('sequelize');

router.get('/new_arrivals', (req, res) => {
    models.auction.findAll({
        where: {
            end_date: {
                [Op.gt]: new Date()
            }
        },
        include: [{
            model: models.item,
            include: [{
                model: models.item_picture,
                as: 'item_item_picture',
                where: {
                    is_main_picture: true
                },
                attributes: ['picture']
            }],
            attributes: ['name']
        }],
        attributes: ['id', 'item_id', 'user_id', 'starting_price'],
        order: [
            ['start_date', 'DESC']
        ],
        limit: 8,
        subQuery: false
    }).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/last_chance', (req, res) => {
    models.auction.findAll({
        where: {
            end_date: {
                [Op.gt]: new Date()
            }
        },
        include: [{
            model: models.item,
            include: [{
                model: models.item_picture,
                as: 'item_item_picture',
                where: {
                    is_main_picture: true
                },
                attributes: ['picture']
            }],
            attributes: ['name']
        }],
        attributes: ['id', 'item_id', 'user_id', 'starting_price'],
        order: [
            ['start_date', 'ASC']
        ],
        limit: 8,
        subQuery: false
    }).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/new_arrivals/picture/{id}', (req, res) => {
    res.send(200)
});

module.exports = router;