if (process.env.NODE_ENV !== 'production') require('dotenv').config()
    const mysql = require('mysql2')
    
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
    });
    
    connection.connect(function (err) {
        if (err) console.log(err)
        else console.log("MySQL Database connected!");
    });
    
    module.exports = connection;