require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateAccesToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '20s'
    });
}

function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}
module.exports = {
    generateAccesToken,
    generateRefreshToken
};