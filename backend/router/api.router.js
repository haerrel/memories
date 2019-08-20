const express = require('express');
const router = express.Router();
const database = require('../database/database');
const cryptbox = require('../cryptbox');

// CREATE: PUSH A NEW CARD
router.post('/card', function(req, res) {
    const card = req.body;
    card.hash = cryptbox.hash(card.image_data);
    card.image_data = cryptbox.encrypt(card.image_data, card.secret);
    delete card["secret"];
    database.insert(card); //TODO verify if all attributes are available
    res.status(200).end();
});

// READ: get all cards
router.get('/card', function(req, res) {
    res.json(database.getAll());
    res.status(200).end();
});

// POST: UNLOCK/DECRYPT A CARD
router.post('/card/:id/unlock', function(req, res) {
    const id = req.params.id;
    const secret = req.body.secret;
    let card = Object.assign({}, database.get(id));
    if (card) {
        card.image_data = cryptbox.decrypt(card.image_data, secret);
        if (cryptbox.hash(card.image_data) == card.hash) {
            // TODO where to go with decrypted image
            res.status(200).end();
            return;
        }
    }
    res.status(400).end();
    return;
});

module.exports = router;
