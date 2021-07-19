require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    var token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

function authenticateThirdParty(req, res, next) {
    if(req.body == null || req.body.tokenId == null) return res.sendStatus(401);

    const data = jwt.decode(req.body.tokenId);
    req.user = data;
    next();
}

module.exports = {
    authenticateToken,
    authenticateThirdParty
};