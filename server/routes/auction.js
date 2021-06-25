const express = require('express');
const router = express.Router();
const models = require('../database/models');
const {
    Op
} = require('sequelize');
const {
    sequelize
} = require('../database/models');

// get items for new arrivals, top rated and last chance --> only difference is the order_by clause
function getItemsNTL(sort, limit, description) {
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
        limit: limit,
        subQuery: false
    })
}

router.get('/new_arrivals', (req, res) => {
    getItemsNTL([
        ['start_date', 'DESC']
    ], 8).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/last_chance', (req, res) => {
    getItemsNTL([
        ['end_date', 'ASC']
    ], 8).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/top_rated', (req, res) => {
    getItemsNTL([
        [models.item, 'rating', 'DESC']
    ], 8).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/feature_products', (req, res) => {
    getItemsNTL([
        ['start_date', 'DESC'],
    ], 4).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/feature_collection', (req, res) => {
    getItemsNTL([
        ['start_date', 'DESC'],
    ], 3).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/count_auction_rows', (req, res) => {
    models.auction.count().then(x => res.json(x)).catch(err => res.json(err));
});

router.get('/random_item/:auction_id', (req, res) => {
    models.auction.findOne({
        where: {
            end_date: {
                [Op.gt]: new Date()
            },
            id: req.params.auction_id
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
            attributes: ['name', 'description']
        }],
        limit: 1,
        subQuery: false,
        attributes: ['id', 'starting_price'],
    }).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/single_item/:auction_id', (req, res) => {
    let auction_id = req.params.auction_id;

    return models.auction.findOne({
        limit: 1,
        where: {
            id: auction_id
        },
        include: [{
                model: models.item,
                include: [{
                    model: models.item_picture,
                    as: "item_item_picture",
                    attributes: ['is_main_picture', 'picture']
                }],
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt']
                }
            },
            {
                model: models.bid,
                as: "auction_bid",
                include: [{
                    model: models.user,
                    attributes: ['name', 'surname']

                }],
                attributes: ['bidding_price',
                    [sequelize.fn('date_format', sequelize.col('bidding_time'), '%d %M %Y'), 'bidding_date']
                ]
            }
        ],
        attributes: {
            exclude: ['is_bearing_shipping', 'createdAt', 'updatedAt']
        }

    }).then(x => res.json(x)).catch(err => res.json(err));
});

module.exports = router;