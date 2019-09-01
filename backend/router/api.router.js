const express = require('express');
const router = express.Router();
const database = require('../database/database');
const cryptbox = require('../cryptbox');
const moment = require('moment');

// CREATE: PUSH A NEW CARD
router.post('/card', function(req, res) {
    const card = req.body;
    card.hash = cryptbox.hash(card.image_data);
    card.image_data = cryptbox.encrypt(card.image_data, card.secret);
    delete card["secret"];
    database.insert(
        card,
        function() {
            res.status(200).end();
        }, function() {
            res.status(400).end();
        }
    );
});

// READ: get all cards
router.get('/card', function(req, res) {
    database.getAll(
      function(data) {
          res.json(data);
          res.status(200).end();
      },
        function() {
            res.status(400).end();
        }
    );
});

// POST: UNLOCK/DECRYPT A CARD
router.post('/card/:id/unlock', function(req, res) {
    const id = req.params.id;
    const secret = req.body.secret;
    database.get(
        id,
        function(card) {
            if (card && card.date && moment(card.date).diff(moment()) < 0) {
                card.image_data = cryptbox.decrypt(card.image_data, secret);
                if (cryptbox.hash(card.image_data) == card.hash) {
                    database.update(card.id, {open: true, image_data: card.image_data});
                    res.json(card);
                    res.status(200).end();
                    return;
                }
            }
            res.status(400).end();
        }, function() {
            res.status(400).end();
        }
    )
});

module.exports = router;
