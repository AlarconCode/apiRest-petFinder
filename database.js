
const mysql = require('mysql2')


let connection = mysql.createConnection({
    host: "petfinder.cfpwaykl94ky.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "petFinder2023",
    database: "petfinder"
});

connection.connect(function (err, res) {
    if (err) console.log(err);
    else console.log("MySQL Database connected!");
});

module.exports = connection;