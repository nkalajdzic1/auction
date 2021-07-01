'usestrict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (process.env.CLEAR_DATABASE_URL) {
  sequelize = new Sequelize(process.env.CLEAR_DATABASE_URL);
} else {
  sequelize = new Sequelize('mysql://Admin:admin@localhost/auctiondb');
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

//  ------------- relations --------------

//auction with bid relation
db.auction.hasMany(db.bid, {
  as: "auction_bid",
  foreignKey: 'auction_id',
  sourceKey: 'id'
});
db.bid.belongsTo(db.auction, {
  foreignKey: 'auction_id',
  sourceKey: 'id'
});

//auction with item relation
db.item.hasOne(db.auction, {
  as: "item_auction",
  foreignKey: 'item_id',
  sourceKey: 'id'
});
db.auction.belongsTo(db.item, {
  foreignKey: 'item_id',
  sourceKey: 'id'
});

//item with item_picture relation
db.item.hasMany(db.item_picture, {
  as: "item_item_picture",
  foreignKey: 'item_id',
  sourceKey: 'id'
});
db.item_picture.belongsTo(db.item, {
  foreignKey: 'item_id',
  sourceKey: 'id'
});

//item with item_category_junction relation
db.item.hasMany(db.item_category, {
  as: "item_category",
  foreignKey: "item_id",
  sourceKey: "id"
});
db.item_category.belongsTo(db.item, {
  foreignKey: "item_id",
  sourceKey: "id"
});

//category with item_category_junction relation
db.category.hasMany(db.item_category, {
  as: "category_item",
  foreignKey: "category_id",
  sourceKey: "id"
});
db.item_category.belongsTo(db.category, {
  foreignKey: "category_id",
  sourceKey: "id"
})

//category on it self relation
db.category.hasMany(db.category, {
  as: "category_category",
  foreignKey: "parent_category_id",
  sourceKey: "id"
});
db.category.belongsTo(db.category, {
  as: "subcategory",
  foreignKey: "parent_category_id",
  sourceKey: "id"
});

//auction with user relation
db.user.hasMany(db.auction, {
  as: "user_auction",
  foreignKey: "user_id",
  sourceKey: "id"
});
db.auction.belongsTo(db.user, {
  foreignKey: "user_id",
  sourceKey: "id"
});

//user with bid relation
db.user.hasMany(db.bid, {
  as: "user_bid",
  foreignKey: "user_id",
  sourceKey: "id"
});
db.bid.belongsTo(db.user, {
  foreignKey: "user_id",
  sourceKey: "id"
});

//card with user relation
db.card.hasOne(db.user, {
  as: "card_user",
  foreignKey: "card_id",
  sourceKey: "id"
});
db.user.belongsTo(db.card, {
  foreignKey: "card_id",
  sourceKey: "id"
});

//paypal with user relation
db.paypal.hasOne(db.user, {
  as: "paypal_user",
  foreignKey: "paypal_id",
  sourceKey: "id"
});
db.user.belongsTo(db.paypal, {
  foreignKey: "paypal_id",
  sourceKey: "id"
});

//location with user relation
db.location.hasMany(db.user, {
  as: "location_user",
  foreignKey: "location_id",
  sourceKey: "id"
});
db.user.belongsTo(db.location, {
  foreignKey: "location_id",
  sourceKey: "id"
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;