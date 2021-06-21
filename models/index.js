'usestrict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;



/*
const Sequelize = require("sequelize");
const path = require('path');
const fs = require('fs');


const sequelize = new Sequelize("auctionDB", "Admin", "admin", {
  host: "127.0.0.1",
  dialect: "mysql",
});

var db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.auction = import(__dirname + "/auction.js")(sequelize, );
db.bid = import(__dirname + "/bid.js");
db.card = import(__dirname + "/card.js");
db.category = import(__dirname + "/category.js");
db.item_category = import(__dirname + "/item_category.js");
db.item_picture = import(__dirname + "/item_picture.js");
db.item = import(__dirname + "/item.js");
db.location = import(__dirname + "/location.js");
db.paypal = import(__dirname + "/paypal.js");
db.user = import(__dirname + "/user.js");

db.auction.hasMany(db.bid, {
  as: "auction_bid"
});

db.card.hasOne(db.user, {
  as: "card_user",
  allowNull: true,
});

db.category.hasMany(db.category, {
  as: "subcategory",
});

db.category.hasMany(db.item_category, {
  as: "category_item_category",
});

db.dan.hasMany(db.aktivnost, {
  as: "dan_aktivnost1-N"
});
//db.aktivnost.belongsTo(db.dan, {as: "aktivnost_danN-1"});

db.tip.hasMany(db.aktivnost, {
  as: "tip_aktivnost1-N"
});
//db.aktivnost.belongsTo(db.tip, {as: "aktivnost_tipN-1"});

db.student.belongsToMany(db.grupa, {
  as: "student_grupa",
  through: "pomtabela",
  foreignKey: 'studentId'
}); // jer nije fino radilo bilo sa belongsToMany
//db.grupa.hasMany(db.pomtabela, {as: "grupa_pomtabela"});

module.exports = db;*/