const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST           || '127.0.0.1',
    user: process.env.DB_USER           || 'admin',
    password: process.env.DB_PASSWORD   || '123456',
    database: process.env.DATABASE      || '',
    port: process.env.PORT              || 3306
});

connection.connect(function (err) {
    if (err) console.log(err)
    else console.log("MySQL Database connected!");
});

module.exports = connection;