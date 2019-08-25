if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize')
        , sequelize = null

    if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
        // the application is executed on Heroku ... use the postgres database
        sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     match[4],
            host:     match[3],
            logging:  true //false
        })
    } else {
        // the application is executed on the local machine ... use mysql
        sequelize = new Sequelize('example-app-db', 'root', null)
    }

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Card:      sequelize.import(__dirname + '/card')
        // add your other models here
    }

    /*
      Associations can be defined here. E.g. like this:
      global.db.User.hasMany(global.db.SomethingElse)
    */
}

module.exports = global.db;
