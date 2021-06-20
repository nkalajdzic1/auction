'use strict';
const encryption = require('../encryption/encryption.js');
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var currentDate = new Date();
    var auctionDate = new Date();
    auctionDate.setDate(auctionDate.getDate() + 27);
    await queryInterface.bulkInsert('paypal', [{
        credentials: "user1@gmail.com",
        password: encryption.generateHash("password123"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        credentials: "user2@gmail.com",
        password: encryption.generateHash("testtest123"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        credentials: "user3@gmail.com",
        password: encryption.generateHash("useruser123"),
        created_at: currentDate,
        updated_at: currentDate
      }
    ]);
    await queryInterface.bulkInsert('location', [{
        street: "Lipe 10",
        city: "Sarajevo",
        zip_code: "71000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        street: "adress",
        city: "Zenica",
        zip_code: "72000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        street: "Sutjeska",
        city: "Tuzla",
        zip_code: "75000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        street: "bbbb",
        city: "Goražde",
        zip_code: "73000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        street: "sssss",
        city: "Mostar",
        zip_code: "88000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        street: "unown",
        city: "Mostar",
        zip_code: "88000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('card', [{
        name_on_card: "user4 aaa",
        card_number: "371449635398431",
        expiration_date: "07/22",
        cvc: "164",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name_on_card: "user5 bbb",
        card_number: "1230185960192918",
        expiration_date: "10/21",
        cvc: "313",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name_on_card: "user6 ccc",
        card_number: "0019684011120442",
        expiration_date: "01/23",
        cvc: "091",
        created_at: currentDate,
        updated_at: currentDate
      }
    ]);
    await queryInterface.bulkInsert('item', [{
        name: "Black sneakers",
        color: "BLACK",
        size: "44",
        rating: 4.4,
        description: "Black sport sneakers, with a clean and look that provides comfort.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "Adidas Superstar",
        color: "WHITE",
        size: "42",
        rating: 4.2,
        description: "The classic adidas model that never goes out of fashion.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "Long Fit T-Shirt",
        color: "WHITE",
        size: "M",
        rating: 3.1,
        description: "Long, crew-neck T-shirt in soft jersey with a rounded hem.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "Regular Fit Crew-neck T-shirt",
        color: "GREEN",
        size: "L",
        rating: 3.1,
        description: "Crew-neck T-shirt in soft cotton jersey.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "Slim Jeans",
        color: "BLUE",
        size: "28/32",
        rating: 3.9,
        description: "5-pocket jeans in washed denim with a regular waist, zip fly, and slim legs..",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "Freefit® Slim Jeans",
        color: "BLACK",
        size: "28/30",
        rating: 3.5,
        description: "5-pocket denim jeans with a regular waist, zip fly with button, and slim legs. Made with Lycra® Freefit® technology for soft, super-generous stretch, maximum freedom of movement, and optimal comfort.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        name: "V-neck Kaftan Dress",
        color: "DARK BEIGE",
        size: "S",
        rating: 4.5,
        description: "Calf-length kaftan dress in woven fabric. Low-cut V-neck, pleat at front for added volume, and short sleeves. Straight-cut hem. Unlined.",
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('item_picture', [{
        item_id: 1,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img3.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img4.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img3.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img4.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 3,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/t-shirt1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 4,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/t-shirt2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 5,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/jeans1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 6,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/jeans2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 6,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/jeans2_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 7,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/dress1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('category', [{
        parent_category_id: 1,
        name: "WOMEN",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "MEN",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 3,
        name: "KIDS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 4,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 5,
        name: "HOME",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 6,
        name: "ART",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 7,
        name: "COMPUTERS",
        created_at: currentDate,
        updated_at: currentDate
      },
      // women subcategories
      {
        parent_category_id: 1,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 1,
        name: "BAGS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 1,
        name: "CLOTHES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 1,
        name: "BAD & BATH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 1,
        name: "SWIMMING COSTUMES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 1,
        name: "SPOT TOP & SHOES",
        created_at: currentDate,
        updated_at: currentDate
      },
      // men subcategories
      {
        parent_category_id: 2,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "BAGS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "CLOTHES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "BAD & BATH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "SWIMMING COSTUMES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        parent_category_id: 2,
        name: "SPOT TOP & SHOES",
        created_at: currentDate,
        updated_at: currentDate
      },

    ]);
    await queryInterface.bulkInsert('item_category', [{
        item_id: 1,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 3,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 4,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 5,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 5,
        category_id: 16,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 6,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 6,
        category_id: 16,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 7,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 7,
        category_id: 10,
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('user', [{
        location_id: 1,
        card_id: null,
        paypal_id: 1,
        name: "user1",
        surname: "none",
        gender: "MALE",
        date_of_birth: new Date(1985, 1, 1),
        phone_number: "(415) 555-0132",
        email: "user1@gmail.com",
        password: encryption.generateHash("passpass"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        location_id: 2,
        card_id: null,
        paypal_id: 2,
        name: "user2",
        surname: "none",
        gender: "FEMALE",
        date_of_birth: new Date(1991, 3, 12),
        phone_number: "(415) 102-1052",
        email: "user2@gmail.com",
        password: encryption.generateHash("user2pass"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        location_id: 3,
        card_id: null,
        paypal_id: 3,
        name: "user3",
        surname: "none",
        gender: "FEMALE",
        date_of_birth: new Date(1998, 6, 21),
        phone_number: "+387 66 711 711",
        email: "user3@gmail.com",
        password: encryption.generateHash("itsasecret"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        location_id: 4,
        card_id: 1,
        paypal_id: null,
        name: "user4",
        surname: "aaa",
        gender: "FEMALE",
        date_of_birth: new Date(1999, 9, 9),
        phone_number: null,
        email: "user4@gmail.com",
        password: encryption.generateHash("idontknow"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        location_id: 5,
        card_id: 2,
        paypal_id: null,
        name: "user5",
        surname: "bbb",
        gender: "MALE",
        date_of_birth: new Date(1990, 11, 11),
        phone_number: null,
        email: "user5@gmail.com",
        password: encryption.generateHash("pitajkonobara"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        location_id: 6,
        card_id: 3,
        paypal_id: null,
        name: "user6",
        surname: "ccc",
        gender: "FEMALE",
        date_of_birth: new Date(1980, 11, 23),
        phone_number: null,
        email: "user6@gmail.com",
        password: encryption.generateHash("fromonetoeight"),
        role: 2,
        profile_picture: null,
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('auction', [{
        item_id: 1,
        user_id: 1,
        startring_price: 35.75,
        is_bearing_shipping: false,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 2,
        user_id: 1,
        startring_price: 45.90,
        is_bearing_shipping: false,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 3,
        user_id: 2,
        startring_price: 15,
        is_bearing_shipping: true,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 4,
        user_id: 2,
        startring_price: 12.78,
        is_bearing_shipping: false,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 5,
        user_id: 3,
        startring_price: 33,
        is_bearing_shipping: false,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 6,
        user_id: 3,
        startring_price: 33,
        is_bearing_shipping: false,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        item_id: 7,
        user_id: 3,
        startring_price: 80.10,
        is_bearing_shipping: true,
        start_date: currentDate,
        end_date: auctionDate,
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('paypal', null, {});
    queryInterface.bulkDelete('location', null, {});
    queryInterface.bulkDelete('card', null, {});
    queryInterface.bulkDelete('item', null, {});
    queryInterface.bulkDelete('item_picture', null, {});
    queryInterface.bulkDelete('category', null, {});
    queryInterface.bulkDelete('item_category', null, {});
    queryInterface.bulkDelete('user', null, {});
    queryInterface.bulkDelete('auction', null, {});
    queryInterface.bulkDelete('bid', null, {});
  }
};