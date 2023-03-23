const connection = require("../database")

function getPosts(request, response) {
    let sql;

    if (request.query.id_user) {
        sql = `SELECT * FROM posts WHERE id-user=${request.query.id_user}`
    } else {
        `SELECT * FROM posts`
    }

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}

function putPosts(request, response) {
    let sql = `UPDATE posts SET 
    post-location= "${request.body.place}", 
    url-post="${request.body.imgPet}",
    description="${request.body.comment}",
    post-date="${request.body.post_date}"
    found=${request.body.found}
    WHERE (id-post=${request.body.id_cardPost})`


    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}

function putFoundPost(request, response) {

    let sql = `UPDATE posts SET 
    found=${request.body.found}
    WHERE (id-post=${request.body.id_cardPost})`

    connection.query(sql, function (err, result) {
        if (err)
            console.log(err);
        else {
            response.send(result)
        }
    })
}


module.exports = { getPosts, putPosts, putFoundPost }