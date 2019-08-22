const crypto = require("crypto");
const aes256 = require('aes256');

function encrypt(data, secret) {
    return aes256.encrypt(secret, data);
}

function decrypt(encrypted, secret) {
    return aes256.decrypt(secret, encrypted);
}

function hash(plain) {
    return crypto.createHmac('sha256', "")
        .update(plain)
        .digest('hex');
}


module.exports = {
    encrypt,
    decrypt,
    hash
};
