const express = require('express');
const router = express.Router();
const models = require('../../models');

router.get('/new_arrivals', (req, res) => {
    models.auction.findAll({
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
        ]
    }).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/last_chance', (req, res) => {
    models.auction.findAll({
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
        ]
    }).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/new_arrivals/picture/{id}', (req, res) => {
    res.send(200)
});

module.exports = router;