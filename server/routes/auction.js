const express = require('express');
const router = express.Router();
const models = require('../../models');

router.get('/new_arrivals', (req, res) => {
    models.auction.findAll({
        limit: 8,
        include: [{
            model: models.item,
            as: 'item_auction_id',
        }],
        order: [
            ['start_date', 'DESC']
        ]
    }).then(x => res.json(x)).catch(err => res.json(err));
});

module.exports = router;