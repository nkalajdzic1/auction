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
        ['end_date', 'ASC']
    ]).then(x => res.json(x)).catch(x => res.json(x));
});

router.get('/top_rated', (req, res) => {
    getItemsNTL([
        [models.item, 'rating', 'DESC']
    ]).then(x => res.json(x)).catch(x => res.json(x));
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
                attributes: ['bidding_price', 'bidding_time']
            }
        ],
        attributes: {
            exclude: ['is_bearing_shipping', 'createdAt', 'updatedAt']
        }

    }).then(x => res.json(x)).catch(err => res.json(err));
});

module.exports = router;