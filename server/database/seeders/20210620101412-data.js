'use strict';
const encryption = require('../encryption/encryption.js');
const fs = require('fs');
const sequelize = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    var currentDate = new Date();
    var auctionDate = new Date();
    auctionDate.setDate(auctionDate.getDate() + 27);
    await queryInterface.bulkInsert('paypal', [{
        id: 1,
        credentials: "user1@gmail.com",
        password: encryption.generateHash("password123"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        credentials: "user2@gmail.com",
        password: encryption.generateHash("testtest123"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        credentials: "user3@gmail.com",
        password: encryption.generateHash("useruser123"),
        created_at: currentDate,
        updated_at: currentDate
      }
    ]);
    await queryInterface.bulkInsert('location', [{
        id: 1,
        street: "Lipe 10",
        city: "Sarajevo",
        zip_code: "71000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        street: "adress",
        city: "Zenica",
        zip_code: "72000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        street: "Sutjeska",
        city: "Tuzla",
        zip_code: "75000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        street: "bbbb",
        city: "Goražde",
        zip_code: "73000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
        street: "sssss",
        city: "Mostar",
        zip_code: "88000",
        state: "",
        country: "BiH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 6,
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
        id: 1,
        name_on_card: "user4 aaa",
        card_number: "371449635398431",
        expiration_date: "07/22",
        cvc: "164",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        name_on_card: "user5 bbb",
        card_number: "1230185960192918",
        expiration_date: "10/21",
        cvc: "313",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        name_on_card: "user6 ccc",
        card_number: "0019684011120442",
        expiration_date: "01/23",
        cvc: "091",
        created_at: currentDate,
        updated_at: currentDate
      }
    ]);
    await queryInterface.bulkInsert('item', [{
        id: 1,
        name: "Black sneakers",
        color: "BLACK",
        size: "LARGE",
        rating: 4.4,
        description: "Black sport sneakers, with a clean and look that provides comfort.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        name: "Adidas Superstar",
        color: "WHITE",
        size: "MEDIUM",
        rating: 4.2,
        description: "The classic adidas model that never goes out of fashion.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        name: "Long Fit T-Shirt",
        color: "WHITE",
        size: "MEDIUM",
        rating: 3.1,
        description: "Long, crew-neck T-shirt in soft jersey with a rounded hem.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        name: "Regular Fit Crew-neck T-shirt",
        color: "GREEN",
        size: "LARGE",
        rating: 3.1,
        description: "Crew-neck T-shirt in soft cotton jersey.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
        name: "Slim Jeans",
        color: "BLUE",
        size: "SMALL",
        rating: 3.9,
        description: "5-pocket jeans in washed denim with a regular waist, zip fly, and slim legs..",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 6,
        name: "Freefit® Slim Jeans",
        color: "BLACK",
        size: "SMALL",
        rating: 3.5,
        description: "5-pocket denim jeans with a regular waist, zip fly with button, and slim legs. Made with Lycra® Freefit® technology for soft, super-generous stretch, maximum freedom of movement, and optimal comfort.",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 7,
        name: "V-neck Kaftan Dress",
        color: "DARK BEIGE",
        size: "SMALL",
        rating: 5,
        description: "Calf-length kaftan dress in woven fabric. Low-cut V-neck, pleat at front for added volume, and short sleeves. Straight-cut hem. Unlined.",
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('item_picture', [{
        id: 1,
        item_id: 1,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img3.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img4.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
        item_id: 1,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe1_img5.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 6,
        item_id: 2,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 7,
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 8,
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img3.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 9,
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img4.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 10,
        item_id: 2,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/shoe2_img5.png"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 11,
        item_id: 3,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/t-shirt1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 12,
        item_id: 4,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/t-shirt2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 13,
        item_id: 5,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/jeans1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 14,
        item_id: 6,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/jeans2_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 15,
        item_id: 6,
        is_main_picture: false,
        picture: fs.readFileSync(__dirname + "/img/jeans2_img2.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 16,
        item_id: 7,
        is_main_picture: true,
        picture: fs.readFileSync(__dirname + "/img/dress1_img1.jpg"),
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('category', [{
        id: 1,
        parent_category_id: 1,
        name: "WOMEN",
        created_at: currentDate,
        updated_at: currentDate
      },

      {
        id: 2,
        parent_category_id: 2,
        name: "MEN",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        parent_category_id: 3,
        name: "KIDS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        parent_category_id: 4,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
        parent_category_id: 5,
        name: "HOME",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 6,
        parent_category_id: 6,
        name: "ART",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 7,
        parent_category_id: 7,
        name: "COMPUTERS",
        created_at: currentDate,
        updated_at: currentDate
      },
      // women subcategories
      {
        id: 8,
        parent_category_id: 1,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 9,
        parent_category_id: 1,
        name: "BAGS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 10,
        parent_category_id: 1,
        name: "CLOTHES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 11,
        parent_category_id: 1,
        name: "BAD & BATH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 12,
        parent_category_id: 1,
        name: "SWIMMING COSTUMES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 13,
        parent_category_id: 1,
        name: "SPOT TOP & SHOES",
        created_at: currentDate,
        updated_at: currentDate
      },
      // men subcategories
      {
        id: 14,
        parent_category_id: 2,
        name: "ACCESORIES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 15,
        parent_category_id: 2,
        name: "BAGS",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 16,
        parent_category_id: 2,
        name: "CLOTHES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 17,
        parent_category_id: 2,
        name: "BAD & BATH",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 18,
        parent_category_id: 2,
        name: "SWIMMING COSTUMES",
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 19,
        parent_category_id: 2,
        name: "SPOT TOP & SHOES",
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('item_category', [{
        id: 1,
        item_id: 1,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        item_id: 2,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },


      {
        id: 3,
        item_id: 2,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        item_id: 3,
        category_id: 2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
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
        id: 6,
        item_id: 5,
        category_id: 16,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 7,
        item_id: 6,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 8,
        item_id: 6,
        category_id: 16,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 9,
        item_id: 7,
        category_id: 1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 10,
        item_id: 7,
        category_id: 10,
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    await queryInterface.bulkInsert('user', [{
        id: 1,
        is_third_party_user: false,
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
        id: 2,
        is_third_party_user: false,
        location_id: 1,
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
        id: 3,
        is_third_party_user: false,
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
        id: 4,
        is_third_party_user: false,
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
        id: 5,
        is_third_party_user: false,
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
        id: 6,
        is_third_party_user: false,
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
    var a1 = new Date(),
      ae1 = new Date(),
      a2 = new Date(),
      ae2 = new Date(),
      a3 = new Date(),
      ae3 = new Date(),
      a4 = new Date(),
      ae4 = new Date(),
      a5 = new Date(),
      ae5 = new Date(),
      a6 = new Date(),
      ae6 = new Date(),
      a7 = new Date(),
      ae7 = new Date();
    a1.setMonth(a1.getMonth() - 1);
    ae1.setDate(ae1.getDate() + 12);
    a2.setDate(a2.getDate() - 25);
    ae2.setDate(ae2.getDate() + 1);
    a3.setDate(a3.getDate() - 20);
    ae3.setHours(ae3.getHours() + 18);
    a4.setDate(a4.getDate() - 2);
    ae4.setHours(ae4.getHours() + 20);
    a5.setDate(a5.getDate() - 35);
    ae5.setHours(ae5.getHours() + 24);
    a6.setDate(a6.getDate() - 12);
    ae6.setMinutes(ae6.getMinutes() + 60 * 12);
    a7.setDate(a7.getDate() - 61);
    ae7.setMinutes(ae7.getMinutes() + 60 * 10);
    await queryInterface.bulkInsert('auction', [{
        id: 1,
        item_id: 1,
        user_id: 1,
        starting_price: 35.75,
        is_bearing_shipping: false,
        start_date: a1,
        end_date: ae1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 2,
        item_id: 2,
        user_id: 1,
        starting_price: 45.90,
        is_bearing_shipping: false,
        start_date: a2,
        end_date: ae2,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 3,
        item_id: 3,
        user_id: 2,
        starting_price: 15,
        is_bearing_shipping: true,
        start_date: a3,
        end_date: ae3,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 4,
        item_id: 4,
        user_id: 2,
        starting_price: 12.78,
        is_bearing_shipping: false,
        start_date: a4,
        end_date: ae4,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 5,
        item_id: 5,
        user_id: 3,
        starting_price: 33,
        is_bearing_shipping: false,
        start_date: a5,
        end_date: ae5,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 6,
        item_id: 6,
        user_id: 3,
        starting_price: 33,
        is_bearing_shipping: false,
        start_date: a6,
        end_date: ae6,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        id: 7,
        item_id: 7,
        user_id: 3,
        starting_price: 80.10,
        is_bearing_shipping: true,
        start_date: a7,
        end_date: ae7,
        created_at: currentDate,
        updated_at: currentDate
      },
    ]);
    var bid1 = new Date(a5);
    bid1.setHours(bid1.getHours() + 1)
    var bid2 = new Date(a5);
    bid2.setHours(bid2.getHours() + 2)
    await queryInterface.bulkInsert('bid', [{
        user_id: 1,
        auction_id: 5,
        bidding_price: 45,
        bidding_time: bid1,
        created_at: currentDate,
        updated_at: currentDate
      },
      {
        user_id: 2,
        auction_id: 5,
        bidding_price: 48,
        bidding_time: bid2,
        created_at: currentDate,
        updated_at: currentDate
      }
    ])

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