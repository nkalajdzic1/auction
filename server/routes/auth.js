const express = require('express');
const router = express.Router();
const models = require('../database/models');
const jwt = require('jsonwebtoken');
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

const middleware = require('./authMiddleware');

const heplingF = require('./token');

const emailExists = async (email) => {
    const userExists = await models.user.findOne({
        where: {
            email: email
        }
    });

    return userExists;
}

const generateTokens = (user) => {
    const accessToken = heplingF.generateAccesToken(user);
    const refreshToken = heplingF.generateRefreshToken(user);

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    };
};

router.get('/rand', (req, res) => {
    console.log(req.cookies['session_id']);
    res.sendStatus(200);
});

router.post('/third_party_auth', middleware.authenticateThirdParty, async (req, res) => {

    const data = req.user;
    const user = await emailExists(data.email);

    if (user == null) {
        const name = data.name.split(' ')[0];
        const surname = data.name.split(' ')[1];

        await models.user.create({
            is_third_party_user: '1',
            name: name != null ? name : 'unown',
            surname: surname != null ? surname : 'unown',
            email: data.email,
            password: generateHash('###$$$###')
        });

    }

    const tokens = generateTokens({
        name: data.name,
        email: data.email
    });

    res.cookie('session_id', tokens.refreshToken, {
        httpOnly: true
    });

    res.json({
        accessToken: tokens.accessToken
    });


});

router.post('/register', async (req, res) => {

    // const user = await emailExists(req.body.email);

    //if (user != null) return res.status(400).send(`User with email ${req.body.email} already exists!`);

    /*await models.user.create({
        name: req.body.firstName,
        surname: req.body.lastName,
        email: req.body.email,
        password: generateHash(req.body.password)
    });*/

    const tokens = generateTokens({
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname
    });

    res.cookie('refresh_token', tokens.refreshToken, {
        httpOnly: true
    });
    res.json({
        accessToken: tokens.accessToken
    });
    //res.send(`User ${req.body.firstName} ${req.body.lastName} created.`);*/
});

router.get('/login', async (req, res) => {

    const userExists = await models.user.findOne({
        where: {
            email: req.body.email
        }
    });

    if (userExists == null) return res.status(400).send(`User with email ${req.body.email} does not exist!`);

    if (await comparePassword(req.body.password, userExists.password)) {
        const user = {
            id: userExists.id,
            name: userExists.name,
            surname: userExists.surname,
            email: userExists.email
        }

        const accessToken = heplingF.generateAccesToken(user);
        const refreshToken = heplingF.generateRefreshToken(user);

        return res.json({
            accessToken: accessToken,
            refreshToken: refreshToken
        });
    }

    return res.status(400).send(`Wrong password for user with mail ${req.body.email}`);

});


module.exports = router;