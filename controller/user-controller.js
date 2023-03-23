const connection = require('../database')

// registro de usuarios
const postUser = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {userName, password, email, userLocation, phone} = req.body

    let params = [userName, password, email, userLocation, phone]

    let sql = `INSERT INTO Users (userName, password, email, userLocation, phone) VALUES (?, ?, ?, ?, ?);`

    connection.query(sql, params, (err, result) => {

        if (err) {
            console.log(err);
            res.send(response)
        } else {
            console.log(result);
            response.error = false
            response.code = 200,
            response.result = result
            res.send(response)
        }

    })

}