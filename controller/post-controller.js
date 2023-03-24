const connection = require('../database')

const postPublication = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {id_user, post_location, url_post, description, post_date, found} = req.body

    let params = [id_user, post_location, url_post, description, post_date, found]

    let sql = `INSERT INTO Posts (id_user, post_location, url_post, description, post_date, found) VALUES (?, ?, ?, ?, ?, default);`

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

const deletePublication = (req, res) => {

    let response = {error: true, code:500, result: []}

    const { id_post } = req.body

    let params = [id_post]

    let sql = `DELETE from Posts WHERE id_post = ?`

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


module.exports = { postPublication, deletePublication }