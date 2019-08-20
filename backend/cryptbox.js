// const crypto = require("crypto"); // TODO how to hash with crypto-lib
function encrypt(data, secret) {
    return data + secret; 
}

function decrypt(encrypted, secret) {
    return encrypted.substr(0, encrypted.length - secret.length)
}

function hash(plain) {
    return plain.length;
}


module.exports = {
    encrypt,
    decrypt,
    hash
}