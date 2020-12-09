const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'boom_tv_webapp',
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex)

// Defining models
const UserScore = bookshelf.model('User', {
    tableName: 'userScores'
});

module.exports = {
    UserScore
}
