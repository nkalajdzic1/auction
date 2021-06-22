const express = require('express');
const router = express.Router();
const models = require('../../models');
const {
    Op
} = require('sequelize');

// get items for new arrivals, top rated and last chance --> only difference is the order_by clause
function getItemsNTL(sort) {
    return models.auction.findAll({
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
        order: sort,
        limit: 8,
        subQuery: false
    })
}

router.get('/new_arrivals', (req, res) => {
    getItemsNTL([
        ['start_date', 'DESC']
    ]).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/last_chance', (req, res) => {
    getItemsNTL([
        ['start_date', 'ASC']
    ]).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/top_rated', (req, res) => {
    getItemsNTL([
        [models.item, 'rating', 'DESC']
    ]).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/new_arrivals/picture/{id}', (req, res) => {
    res.send(200)
});

module.exports = router;