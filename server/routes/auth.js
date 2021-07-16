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
const {
    generateHash,
    comparePassword
} = require('../database/encryption/encryption');
const {
    generateToken
} = require('./token');


router.post('/register', async (req, res) => {
    const user = await models.user.findOne({
        where: {
            email: req.body.email
        }
    });

    if (user != null) return res.status(400).send(`User with email ${req.body.email} already exists!`);

    await models.user.create({
        name: req.body.firstName,
        surname: req.body.lastName,
        email: req.body.email,
        password: generateHash(req.body.password)
    });

    res.send(`User ${req.body.firstName} ${req.body.lastName} created.`);
});

router.get('/login', async (req, res) => {

    const userExists = await models.user.findOne({
        where: {
            email: req.body.email
        }
    })

    if (userExists == null) return res.status(400).send(`User with email ${req.body.email} does not exist!`);

    if (await comparePassword(req.body.password, userExists.password)) {
        const user = {
            name: userExists.name,
            surname: userExists.surname,
            email: userExists.email
        }

        const token = generateToken(user);

        return res.json({
            token: token
        });
    }

    return res.status(400).send(`Wrong password for user with mail ${req.body.email}`);

});


module.exports = router;