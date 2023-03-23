const connection = require('../database')

// registro de usuarios
const postUser = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {user_name, password, email, user_location, phone, user_image} = req.body

    let params = [user_name, password, email, user_location, phone, user_image]

    let sql = `INSERT INTO Users (user_name, password, email, user_location, phone, user_image) VALUES (?, ?, ?, ?, ?, ?);`

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

const putUser = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {id_user, user_name, password, email, user_location, phone, user_image} = req.body

    let params = [user_name, password, email, user_location, phone, user_image, id_user]

    let sql = `UPDATE Users SET user_name = COALESCE(?, user_name), password = COALESCE(?, password), email = COALESCE(?, email), user_location = COALESCE(?, user_location), phone = COALESCE(?, phone), user_image = COALESCE(?, user_image)  WHERE id_user = ?`

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

module.exports = {postUser, putUser}