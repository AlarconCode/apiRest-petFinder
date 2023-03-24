const connection = require("../database")

function getPublications(request, response) {
    let respuesta = { error: true, code: 500, result: [] };
    let sql = "";
    let id_user = request.query.id_user;
    let params = [id_user];

    //como esta en la base de datos dentor del array.
    if (id_user) {
        sql = `SELECT * FROM Posts WHERE id_user=?`
    } else {
        sql = `SELECT * FROM Posts`
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
    // let sql = `UPDATE Posts SET 
    // post-location= "${request.body.place}", 
    // url-post="${request.body.imgPet}",
    // description="${request.body.comment}",
    // post-date="${request.body.post_date}",
    // found=${request.body.found}
    // WHERE (id-post=${request.body.id_cardPost})`

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

function getFoundPublication() {

    let respuesta = { error: true, code: 500, result: [] };
   
    let id_post = request.query.id_post;
     // const { id_post, found } = request.body
    const {found} = request.body;
    let params = [found, id_post]

    let sql = `SELECT found FROM Posts WHERE id_post=?`

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



function putFoundPublication(request, response) {

    let respuesta = { error: true, code: 500, result: [] };
    const { id_post, found } = request.body
    let params = [found, id_post]
    let sql = `UPDATE Posts SET found=? WHERE id_post=?`

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
module.exports = { getPublications, putPublication, putFoundPublication, postPublication, getFoundPublication }

