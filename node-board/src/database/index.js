require('dotenv').config();

const db = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : 'root',
        password : process.env.DB_PASSWORD,
        database : 'node_board'
    }
});

const ret = db.raw('select now()').then((item) => {console.log(item[0])})

module.exports = db;