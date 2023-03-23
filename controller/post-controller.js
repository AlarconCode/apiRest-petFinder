const connection = require("../database")

function getPosts(request, response){
    let sql;

    if(request.query.id_user){
        sql= `SELECT * FROM posts WHERE id_user=${request.query.id_user}`
    }else{
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

module.exports={getPosts}