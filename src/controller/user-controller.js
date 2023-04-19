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

const postLogin = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {email, password} = req.body

    let params = [email, password]

    let sql = `SELECT id_user, user_name, password, email, user_location, phone, user_image FROM Users WHERE email = ? AND password = ?`

    connection.query(sql, params, (err, result) => {

        if(err) {
            console.log(err);
        } else {
            console.log(result);
            if(result.length == 0) {
                response.error = true
                response.code = 404,
                response.result = 'Los datos no existen'
            } else {
                response.error = false
                response.code = 200,
                response.result = result
            }
            res.send(response)
        }

    })

}

const getUser = (req, res) => {

    let respuesta = { error: true, code: 500, result: [] };
    let sql = "";
    let id_user = req.query.id_user;
    let params = [id_user];

    if (id_user) {
        sql = `SELECT * FROM Users WHERE id_user=?`
    } else {
        sql = `SELECT * FROM Users`
    }

    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log(err);
            res.send(respuesta)
        }
        else {
            console.log(result)
            respuesta.error = false;
            respuesta.code = 200;
            respuesta.result = result;
            res.send(respuesta)
        }
    })

}

module.exports = {postUser, putUser, postLogin, getUser}