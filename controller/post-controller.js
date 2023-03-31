const connection = require("../database")

function getPublications(request, response) {
    let respuesta = { error: true, code: 500, result: [] };
    let sql = "";
    let id_post = request.query.id_post;
    let params = [id_post];

    if (id_post) {
        sql = `SELECT * FROM Posts WHERE id_post=?`
    } else {
        sql = `SELECT p.id_post, p.post_location, p.url_post, p.description, p.post_date, p.found, u.user_name, u.user_image FROM Posts AS p
        INNER JOIN Users AS u ON u.id_user = p.id_user`
    }

    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log(err);
            response.send(respuesta)
        }
        else {
            console.log(result)
            respuesta.error = false;
            respuesta.code = 200;
            respuesta.result = result;
            response.send(respuesta)
        }
    })
}


function putPublication(request, response) {

    let respuesta = { error: true, code: 500, result: [] };
    const { id_post, post_location, url_post, description, post_date, found } = request.body
    let params = [post_location, url_post, description, post_date, found, id_post]
    let sql = `UPDATE Posts SET post_location=COALESCE(?,post_location), url_post=COALESCE(?, url_post), 
    description=COALESCE(?,description), post_date=COALESCE(?,post_date), found=COALESCE(?,found) WHERE id_post=?`

    connection.query(sql, params, function (err, result) {
        if (err) {
            console.log(err);
            response.send(respuesta)
        }
        else {
            console.log(result)
            respuesta.error = false;
            respuesta.code = 200;
            respuesta.result = result;
            response.send(respuesta)
        }
    })
}



const postPublication = (req, res) => {

    let response = { error: true, code: 500, result: [] }

    const { id_user, post_location, url_post, description, post_date, found } = req.body

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

module.exports = { getPublications, putPublication, postPublication, deletePublication }

