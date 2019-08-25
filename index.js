const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./backend/router/api.router');
const db = require('./models');

db.sequelize.sync().then(function() {    express()
        .use(bodyParser({limit: '50mb'}))
        .use(bodyParser.json())
        .use(cors())
        .use(express.static(path.join(__dirname, 'public')))
        .use('/api/v1', apiRouter)
        .get('/', (req, res) => res.render('public/index.html'))
        .listen(PORT, () => console.log(`Listening on ${PORT}`));
});

