const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const apiRouter = require('./backend/router/api.router')

express()
  .use(bodyParser.json())
  .use('/static', express.static(path.join(__dirname, 'public')))
  .use('/api/v1', apiRouter)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
