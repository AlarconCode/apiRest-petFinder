
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: "petfinder.cfpwaykl94ky.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "petFinder2023",
    database: "petFinder",
    port: 3306
});

connection.connect(function (err) {
    if (err) console.log(err)
    else console.log("MySQL Database connected!");
});

module.exports = connection;