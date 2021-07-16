require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET);
}

module.exports = {
    generateToken
};