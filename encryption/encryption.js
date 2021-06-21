const bcrypt = require('bcrypt');

module.exports.generateHash = (password) => {
    let salt = bcrypt.genSaltSync();
    return password = bcrypt.hashSync(password, salt);
}

module.exports.comparePassword = (enteredPassword, hash) => {
    return bcrypt.compare(enteredPassword, hash);
}