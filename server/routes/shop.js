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

async function filteredAuctions(filters) {
    var itemFilter = {};
    if (filters.color != -1) itemFilter['color'] = filters.color.toLocaleUpperCase();
    if (filters.size != -1) itemFilter['size'] = filters.size.toLocaleUpperCase();

    var categoryFilter = {};
    if (filters.subcategory != -1) categoryFilter['category_id'] = filters.subcategory;

    var sp = {};
    if (filters.minPrice != -1) sp['[Op.gte]'] = filters.minPrice;
    if (filters.maxPrice != -1) sp['[Op.lte]'] = filters.maxPrice;

    priceFilter = {
        starting_price: sp
    }

    console.log(priceFilter);

    var result = await models.auction.findAll({
        where: {
            end_date: {
                [Op.gte]: new Date()
            }
        },
        include: [{
            model: models.item,
            include: [{
                model: models.item_picture,
                as: "item_item_picture",
                where: {
                    is_main_picture: true
                },
                attributes: ['picture']
            }, {
                model: models.item_category,
                as: 'item_category',
                where: categoryFilter,
                attributes: ['category_id']
            }],
            where: itemFilter,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        }, {
            model: models.bid,
            as: 'auction_bid',
            attributes: []
        }],
        where: {
            starting_price: {
                [Op.lte]: sequelize.col('auction.starting_price') + 111
            }
        },
        attributes: ['id', 'starting_price', 'start_date', 'end_date', [sequelize.fn('count', sequelize.col('auction_bid.id')), 'numOfBids']],
        group: ['id']
    });

    return result;
}

router.post('/items', (req, res) => {
    filteredAuctions(req.body).then(x => res.json(x))
});

module.exports = router;